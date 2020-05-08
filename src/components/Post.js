import React from 'react';
import ChipInput from 'material-ui-chip-input';
import elasticService from '../services/ElasticService';

class Post extends React.Component{
    chipAllowDuplicates = false
    
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:  '',
            tags: ['tag1']
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onFormSubmit(){
        
    };

    handleAddChip(chip) {
        console.log(this.state)
        this.state.tags.push(chip);
        console.log(this.state);
    }
    
    handleDeleteChip(chip, index) {
        console.log(chip);
    }

    render(){
        return (
            <div id='search-div' className='container-fluid'>
                <h1>Post Page</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" placeholder="title" onChange={this.onFieldChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea className="form-control" id="body" rows="3" onChange={this.onFieldChange}></textarea>
                    </div>
                    <ChipInput
                        value={this.state.tags}
                        onAdd={(chip) => this.handleAddChip(chip)}
                        onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                        onChange={this.onFieldChange}
                        allowDuplicates={false}
                        placeholder="tags"
                        newChipKeys={['Enter', ',', ' ']}
                    />
                    <div className="margind">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Post;
