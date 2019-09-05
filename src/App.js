import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
