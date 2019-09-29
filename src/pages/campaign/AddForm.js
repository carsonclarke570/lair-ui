import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import { Auth0Context } from "../../auth/auth0.js";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({

});

class AddForm extends React.Component {

    static contextType = Auth0Context;

    constructor(props) {
        super(props);
        
        this.handleSubmit  = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();

        var object = {};
        new FormData(event.target).forEach((value, key) => {object[key] = value});
        object["dm_id"] = parseInt(this.context.user.sub.split("|")[1])

        fetch(`${process.env.REACT_APP_API_URL}/campaign` ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        }).then(
            () => {
                this.props.onClose();
            },
            (err) => {
                this.setState({ 
                    error: err
                });
            }
        );
    }

    render() {
        const { classes } = this.props

        return (
            <Dialog open={this.props.open} onClose={this.props.onClose} aria-labelledby="form-title" >
                <form onSubmit={this.handleSubmit}>
                <DialogTitle id="form-title">Create Campaign</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create a new campaign as its Dungeon Master!
                    </DialogContentText>
                    <TextField 
                        margin="dense"
                        id="name"
                        label="Title"
                        name="name"
                        placeholder="Title"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="img"
                        label="Image URL"
                        fullWidth
                        name="img"
                        placeholder="Image URL"
                        variant="outlined"
                    />    
                </DialogContent>
                <DialogActions>
                    <Button type="submit">
                        <CheckIcon />
                    </Button>
                    <Button onClick={this.props.onClose}>
                        <CloseIcon />
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
        );
    }
}

AddForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddForm);