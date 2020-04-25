import React from 'react';
import queryString from 'query-string'

class Search extends React.Component {

    constructor(params) {
        super(params);
        const values = queryString.parse(params.location.search);
        console.log(values.query);
        this.state = {
            searchText: values.query,
            searchResult: [{text: '', id: 1}]
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
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
        //this.props.history.push(`/search?query=${this.state.searchText  }`);
        this.render();
    }

    getSearchResults(query) {
        this.setState({
            searchResult: [{text: 'Result 1', id: 1}, {text: 'Result 2', id: 2}]
        })
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
                            {result.text}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Search;
