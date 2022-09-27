import React, { useEffect, useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

interface EditorProps {
  setContent: any;
  empty?: boolean;
  setEmptyContent?: any;
}

export const MyEditor: React.FunctionComponent<EditorProps> = ({
  setContent,
  empty,
  setEmptyContent,
}) => {
  const [editorState, setEditorState] = useState<EditorState>(EditorState.createEmpty());
  useEffect(() => {
    if (empty) {
      setEditorState(EditorState.createEmpty());
      setEmptyContent(false);
    }

    return () => {};
  }, [empty]);

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="card"
        editorClassName="card-body"
        onEditorStateChange={(newState) => {
          setEditorState(newState);
          setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
        }}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'history',
            'embedded',
            'emoji',
            'image',
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </>
  );
};
