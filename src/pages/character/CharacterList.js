import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import { Auth0Context } from "../../auth/auth0.js";

import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: "0 20px",
        marginTop: "85px",
    },
    divider: {
        marginBottom: "20px",
    },
});

class CharacterList extends React.Component {

    static contextType = Auth0Context;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            characters: [],
        }
    }

    componentDidMount() {
        const id = this.context.user.sub.split("|")[1]
        fetch(process.env.REACT_APP_API_URL + "/character?user_id=" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        characters: result
                    });
                },
                (err) => {
                    this.setState({
                        error: err
                    })
                }
            );
    }

    render() {
        const { classes } = this.props;
        const { error, characters } = this.state

        if (error) {
            return <div>{ error }</div>
        }

        return (
            <div className={classes.root}>  
                <Typography variant="h4" gutterBottom>Characters</Typography>
                <Divider className={classes.divider}/>
                {characters.length === 0 &&
                    <h2>You don't have any characters!</h2>
                }
                {characters.length > 0 &&
                    characters.map(function(character, index){
                        return (
                            <Card className={classes.card} key={index}>
                                {character.name}
                            </Card>
                        );
                    }, this)
                }
            </div>
        );
    }
}

CharacterList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CharacterList);