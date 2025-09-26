import { EditorState } from 'lexical';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HeadingNode } from '@lexical/rich-text';
import { CodeHighlightNode, CodeNode } from '@lexical/code';

import { Text, Flex } from '@mantine/core';

import { editorTheme } from './editorTheme';
import ToolbarPlugin from './plugins/ToolbarPlugin';

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error: Error) {
  console.error(error);
}

function onChange(editorState: EditorState) {
  console.log(editorState);
}

function RichTextEditor() {
  const initialConfig = {
    namespace: 'ArticleEditor',
    editorTheme,
    onError,
    nodes: [HeadingNode, CodeHighlightNode, CodeNode],
  };

  return (
    <Flex className="richTextEditorContainer">
      <LexicalComposer initialConfig={initialConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="richTextEditor"
              aria-placeholder={'Enter some text...'}
              placeholder={
                <Text className="placeholder" variant="secondary">
                  Fire away those flaming keystrokes...
                </Text>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </Flex>
  );
}

export default RichTextEditor;
