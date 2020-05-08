import React from 'react';
import elasticService from '../services/ElasticService';

class Detail extends React.Component {

    constructor(props) {
        super(props);
        const article_id = props.match.params.id;

        this.state = {
            title: '',
            body: '',
            tags: []
        };

        this.load_data(article_id);

    };

    load_data(article_id) {
        elasticService.get_by_id(article_id).then(result => {
            console.log(result);
            this.setState(result.data._source)
        }, error => {
            console.log(error);
        })
    }


    render() {
        return (
            <div className='App'>
                <div className='container fluid'>
                    <div className='article-title text-justify'> <h3>{this.state.title}</h3></div>
                    <div className='article-body text-justify'><span>{this.state.body}</span></div>
                    <div className='article-tags'>
                        {this.state.tags.map(tag =>
                            <span className="badge badge-pill badge-primary tag" key={tag}>{tag}</span>
                        )}
                    </div>
                </div>
            </div>

        );
    }
}

export default Detail;
