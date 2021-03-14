import React from 'react'
import './App.css';
import ProfilPhoto from './Component/Profile/ProfilPhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div className="App">
      <div className="container">
        <ProfilPhoto/>
        <div className="form">
        <FullName/>
        <Address/>
        </div>
      </div>
    </div>
  );
}

export default App;
