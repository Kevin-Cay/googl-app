import React, {useState} from 'react';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Routes} from './components/Routes'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ResultContextProvider } from './context/ResultContextProvider';


function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const handleChangeTheme = () =>{
      setDarkTheme(!darkTheme)
  }

  return (
    <div>
      <Router>
        <ResultContextProvider>
        <div className={darkTheme? 'dark':''}>
        <div className="bg-gray-100 dark:bg-black dark:text-gran-200 min-h-screen ">
          <Navbar darkTheme={darkTheme} handleChangeTheme={handleChangeTheme}  />
          <Routes />
          <Footer />
        </div>
        </div>
      </ResultContextProvider>
      </Router>
    </div>
  );
}

export default App;
