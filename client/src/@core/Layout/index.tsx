import { Outlet } from 'react-router';

import { AppShell } from '@mantine/core';

import Header from './Header';

function Layout() {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}

export { Layout };
