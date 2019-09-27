import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";

import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Actions from './Actions'

const styles = theme => ({
    root: {
        margin: "0 20px",
        marginTop: "85px",
    },
    divider: {
        marginBottom: "20px",
    },
    card: {
        display: "flex",
        borderRadius: "0px",
        boxShadow: "1px 1px 4px 1px #cecece",
        marginBottom: theme.spacing(2),
    },
    image: {
        height: "100px",
        width: "100px",
        backgroundColor: theme.palette.grey[300]
    },
    details: {
        display: "flex",
        flexDirection: "column",
    },
    buttons: {
        textAlign: "right",
        margin: "auto 0",
        marginLeft: "auto",
        marginRight: theme.spacing(3)
    },
    link: {
        textDecoration: "none",
        color: theme.palette.text.primary,
    },
});

class CampaignList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            campaigns: [],
        }
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API_URL + "/campaign")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        campaigns: result
                    });
                },
                (error) => {
                    this.setState({
                        error
                    })
                }
            );
    }

    render() {
        const { classes } = this.props;
        const { error, campaigns } = this.state

        if (error) {
            return <div>[error]</div>
        }

        return (
            <div className={classes.root}>  
                <Typography variant="h4" gutterBottom>Campaigns</Typography>
                <Divider className={classes.divider}/>
                {campaigns.length === 0 &&
                <h2>You don't have any campaigns!</h2>
                }
                {this.state.campaigns.length > 0 &&
                    this.state.campaigns.map(function(campaign, index){
                        const url = `/campaign/${campaign.id}`;
                        return (
                            <Card className={classes.card} onKeyPressCapture={index}>
                                <CardMedia 
                                    className={classes.image}
                                    image={campaign.img}
                                    title={campaign.name}
                                />
                                <div className={classes.details}>
                                    <CardContent>
                                        <Typography component="h5" variant="h5">
                                            <Link to={url} className={classes.link}>{campaign.name}</Link>
                                        </Typography>
                                        <Typography variant="subtitle1" color="primary">[Display Players Here]</Typography>
                                    </CardContent>
                                </div>
                                <div className={classes.buttons}>
                                    <IconButton><EditIcon /></IconButton>
                                    {/* <IconButton onClick={() => deleteCampaign(campaign.id)}><DeleteIcon /></IconButton> */}
                                </div>
                            </Card>
                        );
                    })
                }
                <Actions />
            </div>
        );
    }
}

CampaignList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignList);