import { AppShell } from '@mantine/core';
import Editor from './Editor/Editor';

function ArticleEditor() {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>{/* <Header /> */}</AppShell.Header>

      <AppShell.Main>
        <Editor />
      </AppShell.Main>
    </AppShell>
  );
}

export default ArticleEditor;
