import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import AddIcon from '@material-ui/icons/Add';

import AddForm from "./AddForm";

const styles = theme => ({
    speeddial: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
});

class Actions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            open: false,
            create: false,
        }
    }

    render() {
        const { classes } = this.props;
        const { error, open, create } = this.state;

        if (error) {
            return <div>{ error }</div>
        }

        return (
            <React.Fragment>
                <SpeedDial
                    ariaLabel="Options"
                    className={classes.speeddial}
                    icon={<SpeedDialIcon />}
                    onClose={() => this.setState({ open: false })}
                    onOpen={() => this.setState({ open: true })}
                    open={open}
                    direction="left"
                >  
                    <SpeedDialAction 
                        key="Add Campaign"
                        icon={<AddIcon/>}
                        tooltipTitle="Add Campaign"
                        onClick={() => this.setState({ create: true })}
                    />
                </SpeedDial>
                <AddForm open={create} onClose={() => this.setState({ create: false })}/>
            </React.Fragment>
        );
    }
}

Actions.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Actions);