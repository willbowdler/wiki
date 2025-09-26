import { RouterProvider } from 'react-router/dom';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

import router from '@core/Router';
import { theme } from '@core/theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
