
const axios = require('axios').default;
const ELASTIC_URL = 'http://localhost:9200';
const INDEX_NAME = 'rsearch';

class ElasticService {
    indexExists(index_name){
        return axios.head(`${ELASTIC_URL}/${index_name}` );
    };
    createIndex(index_name){
        console.log('creating index')
        axios.put(`${ELASTIC_URL}/${index_name}`)
    }
    deleteIndex(index_name){
        console.log('deleting index')
        axios.delete(`${ELASTIC_URL}/${index_name}`)
    }
    createIndexIfNotExist(index_name){
        this.indexExists(index_name)
            .then(result=>{
                console.log(`Index ${index_name} already exists. Moving on!!!`);
            }).catch(err=>{
                console.log(`${index_name} not exists.`);
                this.createIndex(index_name);
            });
    };
    multimatch_search(query){
        return axios.post(`${ELASTIC_URL}/${INDEX_NAME}/doc/_search`,query)
    };
    get_by_id(id){
        return axios.get(`${ELASTIC_URL}/${INDEX_NAME}/doc/${id}`);
    };
}
const elasticService = new ElasticService();
elasticService.createIndexIfNotExist(INDEX_NAME);
export default elasticService;
