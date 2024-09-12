import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { Header } from './components/Header';
// import { JobsDetails } from './components/JobsDetails';
import { MyRoutes } from './Routers/routes';
function App() {
  
  return (<div className='App'>
    <Header/>
    <MyRoutes/>

  </div>
  )
}

export default App;
