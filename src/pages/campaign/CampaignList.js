import React from 'react';
import { useFetch } from 'react-hooks-fetch';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead  from '@material-ui/core/TableHead';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import GREY from '@material-ui/core/colors/grey';


const useStyles = makeStyles({
    root: {
        margin: "0 20px",
        marginTop: "85px",
    },
    divider: {
        marginBottom: "20px",
    },
    paper: {
        borderRadius: "0px",
        boxShadow: "1px 1px 4px 1px #cecece",
    },
    link: {
        textDecoration: "none",
        color: GREY[700],
    }
});

function CampaignList() {
    const classes = useStyles();
    const { error, data } = useFetch(`https://glacial-caverns-84553.herokuapp.com/api/campaign`);

    if (error)  {
        return <div>Error fetching campaign list!</div>
    }
    if (!data) return null;

    return (
        <div className={classes.root}>  
            <Typography variant="h4" gutterBottom>Campaigns</Typography>
            <Divider className={classes.divider}/>
            {data.length === 0 &&
            <h2>You don't have any campaigns!</h2>
            }
            {data.length > 0 &&
            <Paper className={classes.paper}>
                <Table>
                    <TableHead>
                        <TableCell>Campaign</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableHead>
                {data.map(function(campaign, index){
                    const url = `/campaign/${campaign.id}`;
                    return (
                        <TableRow>
                            <TableCell align="left" style={{width: "10%"}}><Avatar src={data.img}/></TableCell>
                            <TableCell align="left"><Link to={url} className={classes.link}><Typography variant="h6">{campaign.name}</Typography></Link></TableCell>
                            <TableCell align="right">
                                <span>
                                    <IconButton><EditIcon /></IconButton>
                                    <IconButton><DeleteIcon /></IconButton>
                                </span>
                            </TableCell>
                        </TableRow>
                    );
                })}
                </Table>
            </Paper>
            }
        </div>
    );
}

export default CampaignList;