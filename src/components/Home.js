import React from 'react';
import elasticService from "../services/ElasticService";

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };
    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onFormSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/search?query=${this.state.searchText  }`);
    }

    render(){
        return (
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
        );
    }
}

export default Home;
