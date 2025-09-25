import { Fragment } from 'react';

import { Outlet } from 'react-router';

import Navigation from './Navigation';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
    </Fragment>
  );
}

export default App;
