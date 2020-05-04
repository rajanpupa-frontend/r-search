function get_multi_match_query(params){
    return {
        "query": {
            "multi_match": {
                "query": `${params.query}`,
                
            }
        }
    }
}

export default get_multi_match_query;