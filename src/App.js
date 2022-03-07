import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './Sidebar';
import Body from './Body';
import States from './GlobalStates/States';
import Header from './Header';

function App() {

  const [component, setcomponent] = React.useState('Home');



  return <>
    <Header />

    <States>

      <Sidebar component={component} setcomponent={setcomponent} />

      <div style={{ marginLeft: '20%', marginTop: '8%' }}>
        <Body Componentname={component} setcomponent={setcomponent} />
      </div>

    </States>


  </>
}

export default App;
