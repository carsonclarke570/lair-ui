import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import Menu from './Menu'

const useStyles = makeStyles({
    root: {
        borderRight: "none",
    },
});

function Sidebar() {
    const classes = useStyles();

    return (
        <Hidden mdDown>
            <Drawer variant="permanent" anchor="left" classes={{paper: classes.root}}>
                <Menu />
            </Drawer>
        </Hidden>
    );
}

export default Sidebar;