import React, { FC } from 'react';
import {
  BrowserRouter as Router, Switch,
  Route, Link
} from 'react-router-dom';
import './App.css';
import { Grid } from 'semantic-ui-react';
import { HomePage, AboutPage } from './components';
import Visualizations from './visualizations';

export interface PageConfig {
  path: string
  displayName: string
  PageComponent: React.FC
}

const App: React.FC = () => {
  // TODO: Setup basic sidenav component which pulls
  // from the visualizations directory
  const visualLinks = Visualizations.map((conf) => {
    const { path, displayName, PageComponent } = conf;
    return (
      <li key={path}><Link to={`/${path}`}>{displayName}</Link></li>
    )
  })
  const visualComponents = Visualizations.map((conf) => {
    const { path, PageComponent } = conf;
    return (
      <Route key={path} path={`/${path}`}><PageComponent /></Route>
    )
  })
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {visualLinks}
          <li><Link to='/about'>About</Link></li>
        </ul>
      </nav>
      <Grid>
        <Switch>
          <Route path='/'>
            <HomePage />
          </Route>
          {visualComponents}
          <Route path='/about'>
            <AboutPage />
          </Route>
        </Switch>
      </Grid>
    </Router>
  );
}

export default App;
