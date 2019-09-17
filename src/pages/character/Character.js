import React from 'react';
import { useFetch } from 'react-hooks-fetch';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        margin: "0 20px",
        marginTop: "85px",
    },
    paper: {
        borderRadius: "0px",
        boxShadow: "1px 1px 4px 1px #cecece",
        padding: "15px 15px",
    }
});

function CharacterPage(props) {
    const classes = useStyles();
    const { id } = props.match.params;
    const { error, data } = useFetch(`https://glacial-caverns-84553.herokuapp.com/api/character/${id}`);

    if (error)  {
        return <div>Character with ID { id } not found!</div>
    }
    if (!data) return null;

    return (
        <div className={classes.root}>  
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                    <Paper className={classes.paper}>
                        <h4>{ data.name }</h4>
                        <h4>{ data.race }</h4>
                        <h4>{ data.level }</h4>
                        <h4>{ data.size }</h4>
                        <h4>{ data.alignment }</h4>
                        <Divider />
                        <h4>{ data.ac }</h4>
                        <h4>{ data.armoe }</h4>
                        <h4>{ data.hit_points }</h4>
                        <h4>{ data.hit_die }</h4>
                        <h4>{ data.speed }</h4>
                        <h4>{ data.initiative }</h4>
                        <Divider />
                        <h4>{ data.str }</h4>
                        <h4>{ data.dex }</h4>
                        <h4>{ data.con }</h4>
                        <h4>{ data.itl }</h4>
                        <h4>{ data.wis }</h4>
                        <h4>{ data.cha }</h4>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="grid-item">
                    <Paper className={classes.paper}>Items</Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3} className="grid-item">
                    <Paper className={classes.paper}>Spells</Paper>
                </Grid>
            </Grid>  
        </div>
    );
}

export default CharacterPage;