import { Fragment } from 'react';

import { Outlet } from 'react-router';

import Page from '@skeleton/Page';

import Navigation from './Navigation';

import './App.css';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Page>
        <Outlet />
      </Page>
    </Fragment>
  );
}

function AppWithoutNav() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}

export { App, AppWithoutNav };
