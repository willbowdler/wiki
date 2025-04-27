import { RouterProvider } from 'react-router';

import router from 'Main/core/Router';

import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />,
    </Wrapper>
  );
}

export default App;
