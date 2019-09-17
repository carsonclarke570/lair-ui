import React from 'react';

import { useAuth0 } from '../auth/auth0';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import RED from '@material-ui/core/colors/red';

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
        backgroundColor: RED[300], //#E0E0E0",
    },
    appbar: {
        boxShadow: "none",
    },
    button: {
        marginLeft: "20px",
        color: "#FFFFFF",
    },
    bar: {
        width: "100%",
        textAlign: "right",
    },
    avatar: {

    }
});

function Navbar() {
    const classes = useStyles()
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div className={classes.root}>  
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.box}/>
                    <div className={classes.bar}>
                        { !isAuthenticated && (
                            <Button variant="text" className={classes.button} onClick={() => loginWithRedirect({})}>Log In</Button>
                        )}
                        { isAuthenticated &&  
                            <Button variant="text" className={classes.button} onClick={() => logout()}>Log Out</Button>
                        }
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;