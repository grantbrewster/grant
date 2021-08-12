import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import LandingPage from './pages/LandingPage'
import WorkPage from './pages/WorkPage'
import ProjectsPage from './pages/ProjectsPages'
import ArtPage from './pages/ArtPage'
import AboutPage from './pages/AboutPage'
import InterestsPage from './pages/InterestsPage'
import Typography from '@material-ui/core/Typography';

//  Router basename={process.env.PUBLIC_URL}
function App() {
  return (
    
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path='/' component={LandingPage} exact/>
          <Route path='/work' component={WorkPage} exact/>
          <Route path='/projects' component={ProjectsPage} exact/>
          <Route path='/art' component={ArtPage} exact/>
          <Route path='/about' component={AboutPage} exact/>
          <Route path='/interests' component={InterestsPage} exact/>
        </Switch>
      </Router>
    </div>
    
  );
}


export default App;
