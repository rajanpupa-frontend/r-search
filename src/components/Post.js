import React from 'react';
import ChipInput from 'material-ui-chip-input';
import elasticService from '../services/ElasticService';

class Post extends React.Component {
    //chipAllowDuplicates = false;

    constructor(props) {
        super(props);
        this.state = {
            form: {
                title: '',
                body: '',
                tags: ['tag1']
            },
            toast: {
                message: 'Hello Toast',
                type: 'Success' // Error, Success
            }
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onFieldChange(event) {
        let fieldname = event.target.name;
        let fieldvalue = event.target.value;
        // console.log(fieldname + ' -> ' + fieldvalue);

        this.setState(prevState => {
            let newform = Object.assign({}, prevState.form);
            //console.log(newform);
            newform[fieldname] = fieldvalue;
            return { form: newform };
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        elasticService.insert_a_document(this.state.form).then(
            (result) => {
                this.setState({ toast: { type: 'Success', message: 'Document successfully Created.' } });
                // push a toast success message
                // redirect to details page. Id is in the response.
            }, (error) => {
                console.error(error);
            }, (afterall) => {
                this.render();
            }
        )
    };

    handleAddChip(chip) {
        this.setState(prevState => {
            let newform = Object.assign({}, prevState.form);
            newform.tags.push(chip);
            return { form: newform };
        });
    }

    handleDeleteChip(chip, index) {
        this.setState(prevState => {
            let newform = Object.assign({}, prevState.form);
            newform.tags.splice(index, 1);
            return { form: newform };
        });
    }

    render() {
        return (
            <div id='search-div' className='container-fluid'>
                <h1>Post Page</h1>
                <form onSubmit={this.onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name='title'
                            placeholder="title"
                            onChange={this.onFieldChange}
                            value={this.state.form.title}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea
                            className="form-control"
                            id="body"
                            name='body'
                            rows="4"
                            onChange={this.onFieldChange}
                            value={this.state.form.body}
                        >
                        </textarea>
                    </div>
                    <ChipInput
                        name='tags'
                        value={this.state.form.tags}
                        onAdd={(chip) => this.handleAddChip(chip)}
                        onDelete={(chip, index) => this.handleDeleteChip(chip, index)}
                        //onChange={this.onFieldChange}
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
