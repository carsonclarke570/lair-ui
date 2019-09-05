import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import RED from '@material-ui/core/colors/red'

const useStyles = makeStyles({
    root: {
        position: "fixed",
        width: "100%",
    },
    box: {
        width: "15%",
        minWidth: "175px",
    },
    toolbar: {
        backgroundColor: "#E0E0E0",
    },
    text: {
        marginLeft: "20px",
        color: RED[300],
    }
});

function Navbar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>  
            <Toolbar className={classes.toolbar}>
                <div className={classes.box}/>
                <div>
                    <Typography variant="h6" noWrap className={classes.text}>
                        ATLASSIAN CHRONICLES
                    </Typography>
                </div>
            </Toolbar>  
        </div>
    );
}

export default Navbar;