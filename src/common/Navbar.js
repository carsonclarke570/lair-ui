import React from 'react';

import { useAuth0 } from '../auth/auth0';

import Menu from './sidebar/Menu';

import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        width: "100%",
    },
    box: {
        width: "15%",
        minWidth: "175px",
    },
    toolbar: {
        backgroundColor: theme.palette.primary,
    },
    appbar: {
        boxShadow: "none",
    },
    button: {
        marginLeft: "20px",
        color: theme.palette.primary.contrastText,
    },
    bar: {
        width: "100%",
        textAlign: "right",
    },
    menuButton: {
        color: theme.palette.primary.contrastText,
    },
}));

function Navbar() {
    const classes = useStyles()
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [isOpen, setOpen] = React.useState(false);

    const toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(open);
    };

    return (
        <div className={classes.root}>  
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                    <Hidden lgUp>
                        <Drawer open={isOpen} onClose={toggleDrawer(false)}><Menu /></Drawer>
                        <IconButton onClick={toggleDrawer(true)} className={classes.menuButton}><MenuIcon /></IconButton>
                    </Hidden>
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