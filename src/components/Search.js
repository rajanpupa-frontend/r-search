import React from 'react';
import queryString from 'query-string'
import get_multi_match_query from './../models/multi_match_query';
import elasticService from './../services/ElasticService';

class Search extends React.Component {

    constructor(params) {
        super(params);
        const values = queryString.parse(params.location.search);
        console.log(values.query);
        if (values.query===undefined) {
            values.query=''
        }
        this.state = {
            searchText: values.query,
            searchResult: [{text: '', id: 1}]
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        // display the results in the window
        //this.getSearchResults();
    };

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onFormSubmit(event) {
        //console.log('A name was submitted: ' + this.state.searchText);
        event.preventDefault();
        this.getSearchResults(this.state.searchText);
        console.log('getting search result');
        this.render();
        console.log('rendered--');
    }

    getSearchResults(query) {
        let esquery = get_multi_match_query({query: query});
        console.log(esquery);
        elasticService.multimatch_search(esquery).then( (result)=>{
            console.log('data received successfully search.')
            let docs = result.data.hits.hits.map(hit=>{
                let id = hit._id;
                let src = hit._source;
                src.id = id;
                return src;
            });
            console.log(docs)
            this.setState({
                searchResult: docs 
            })
        }, (error) =>{
            console.log('data received error search.')
        });
        // this.setState({
        //     searchResult: [{text: 'Result 1', id: 1}, {text: 'Result 2', id: 2}]
        // })
    }

    render() {
        return (
            <div>
                <div id='search-div'>
                    <h1>Search</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <input name='searchText'
                               className="form-control"
                               type="text"
                               value={this.state.searchText}
                               placeholder="Search"
                               aria-label="Search"
                               onChange={this.onFieldChange}
                        />
                    </form>
                </div>
                <div className='search-results'>
                    {this.state.searchResult.map(result =>
                        <div className='search-result' key={result.id}>
                            <p>{result.title}</p>
                            <p>{result.body}</p>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Search;
