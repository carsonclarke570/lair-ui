import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

import { useAuth0 } from '../auth/auth0';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

import HomeIcon from '@material-ui/icons/HomeOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircleOutlined';
import FolderIcon from '@material-ui/icons/FolderOutlined';

import logo from './images/logo.png';

const useStyles = makeStyles({
    root: {
        
    },
    drawerPaper: {
        borderRight: "none",
    },
    logo: {
        width: "15vw",
        margin: "0 auto",
    },
    links: {
        margin: "50px auto",
    },
    icon: {
        color: "#757575"
    },
    text: {
        fontFamily: "'Roboto', sans-serif",
        color: "#757575",
    },
    active: {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "700",
        color: "#757575",
    }
});

function Sidebar() {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        <Hidden mdDown>
            <Drawer variant="permanent" anchor="left" className={classes.root} classes={{paper: classes.drawerPaper}}>
                <img src={logo} alt="Logo" className={classes.logo}/>
                <List className={classes.links}>
                    <ListItem button key="Home" component={Link} to="/">
                        <ListItemIcon className={classes.icon}><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" className={classes.active}/>
                    </ListItem>
                    <ListItem button key="Compendium">
                        <ListItemIcon className={classes.icon}><FolderIcon /></ListItemIcon>
                        <ListItemText primary="Compendium" className={classes.text} />
                    </ListItem>
                    { isAuthenticated && 
                    <Fragment>
                        <ListItem button key="Campaigns" component={Link} to="/campaign">
                            <ListItemIcon className={classes.icon}><FolderIcon /></ListItemIcon>
                            <ListItemText primary="Campaigns" className={classes.text} />
                        </ListItem>
                        <ListItem button key="Characters" component={Link} to="/character">
                            <ListItemIcon className={classes.icon}><AccountCircleIcon /></ListItemIcon>
                            <ListItemText primary="Characters" className={classes.text} />
                        </ListItem>
                    </Fragment>
                    }
                </List>
            </Drawer>
        </Hidden>
    );
}

export default Sidebar;