import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';

import Navbar from './common/Navbar';
import Sidebar from './common/sidebar/Sidebar';
import Home from './pages/home/Home';
import Character from './pages/character/Character';
import CampaignList from './pages/campaign/CampaignList';

import { useAuth0 } from './auth/auth0';

import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[300],
      contrastText: grey[50],
    },
    secondary: {
      main: "#e5ac73",
    },
  },
});

const useStyles = makeStyles(theme => ({
  loading: {
    position: "absolute",
    left: "50%",
    top: "50%",
    color: theme.palette.primary,
  },
  main: {
    marginTop: "65px", 
    marginLeft: "15vw",
    [theme.breakpoints.down('md')]: {
      marginLeft: "0",
    },
  }
}));

function App() {
  const { loading } = useAuth0();
  const classes = useStyles();

  if (loading) {
    return (
      <CircularProgress className={classes.loading}/>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <div className={classes.main}>
          <Suspense fallback={<CircularProgress className={classes.loading}/>}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/campaign/:id" component={Character} />
              <Route path="/campaign" component={CampaignList} />
              <Route path="/character/:id" component={Character} />
              <Route path="/character" exact />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
