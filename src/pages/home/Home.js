import React from 'react';

import { makeStyles } from '@material-ui/core/styles';


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

function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>  
            THIS IS THE HOMEPAGE
        </div>
    );
}

export default Home;