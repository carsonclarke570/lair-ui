import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import AddIcon from '@material-ui/icons/Add';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    speeddial: {
        position: "absolute",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    },
    modal: {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(2)
    },
    text: {
        marginLeft: theme.spacing(2),
        marginTop: theme.spacing(3)
    }
}))

function Actions() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [create, setCreate] = React.useState(false);

    return (
        <React.Fragment>
            <SpeedDial
                ariaLabel="Options"
                className={classes.speeddial}
                icon={<SpeedDialIcon />}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                direction="left"
            >  
                <SpeedDialAction 
                    key="Add Campaign"
                    icon={<AddIcon/>}
                    tooltipTitle="Add Campaign"
                    onClick={() => setCreate(true)}
                />
            </SpeedDial>
            <Modal
                open={create}
                onClose={() => setCreate(false)}
            >
                <Paper className={classes.modal}>
                    <Typography variant="h5" className={classes.text}>Create Campaign</Typography>
                    <form className={classes.container}>
                        <TextField 
                            id="name"
                            label="Title"
                            placeholder="Title"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                        <TextField 
                            id="img"
                            label="Image URL"
                            placeholder="Image URL"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                    </form>
                </Paper>
            </Modal>
        </React.Fragment>
    );
}

export default Actions;