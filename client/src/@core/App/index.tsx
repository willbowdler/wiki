import { Outlet } from 'react-router';

import Wrapper from './Wrapper';

import './App.css';

function App() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default App;
