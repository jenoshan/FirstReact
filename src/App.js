import React from 'react';
import NevBar from "./component/NevBar";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./component/home";

function App() {
  return (
    <div className="App">
      <NevBar></NevBar>
        <Home></Home>
    </div>
  );
}

export default App;
