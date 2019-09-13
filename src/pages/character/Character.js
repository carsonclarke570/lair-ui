import React from 'react';

import { useAuth0 } from '../../auth0';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import RED from '@material-ui/core/colors/red';

const useStyles = makeStyles({
    root: {
        
    }
});

function CharacterPage() {
    const classes = useStyles()
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className={classes.root}>  
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                    <Paper className={classes.paper}>xs=12 sm=12</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>xs=12 sm=6</Paper>
                </Grid>
            </Grid>  
        </div>
    );
}

export default CharacterPage;