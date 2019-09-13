import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Navbar from './common/Navbar';
import Sidebar from './common/Sidebar';
import CharacterPage from './pages/character/Character';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Sidebar />

      <div style={{ marginTop: "65px", marginLeft: "15vw" }}>
        <CharacterPage />
      </div>
    </React.Fragment>
  );
}

export default App;
