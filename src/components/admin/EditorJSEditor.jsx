import React, { useEffect, useRef, useCallback } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import Paragraph from '@editorjs/paragraph';

const validateEditorContent = (content) => {
  console.log('Validating content:', content);
  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    console.warn('Invalid content structure, returning empty blocks');
    return { blocks: [], time: Date.now(), version: '2.31.0-rc.7' };
  }

  const validBlocks = content.blocks.filter((block) => {
    if (!block || !block.type || !block.data) {
      console.warn('Block missing required fields:', block);
      return false;
    }

    if (block.type === 'paragraph') {
      if (block.data.text === undefined || block.data.text === null) {
        console.warn('Paragraph block has no text field:', block);
        return false;
      }
      // Remove HTML tags if present
      if (typeof block.data.text === 'string' && block.data.text.includes('<')) {
        block.data.text = block.data.text.replace(/<[^>]*>/g, '');
      }
      return true; // Keep paragraphs even if empty
    }

    if (block.type === 'header') {
      if (!block.data.text || typeof block.data.text !== 'string') {
        console.warn('Header block invalid:', block);
        return false;
      }
      if (!block.data.level || block.data.level < 1 || block.data.level > 6) {
        block.data.level = 2;
      }
      return true;
    }

    if (block.type === 'list') {
      if (!block.data.style || !['ordered', 'unordered'].includes(block.data.style)) {
        console.warn('Invalid list style, defaulting to unordered:', block);
        block.data.style = 'unordered';
      }
      if (!block.data.items || !Array.isArray(block.data.items)) {
        console.warn('List block has no items or invalid items:', block);
        return false;
      }
      // Ensure items are strings and non-empty
      block.data.items = block.data.items.filter(item => typeof item === 'string' && item.trim());
      if (block.data.items.length === 0) {
        console.warn('List block has no valid items:', block);
        return false;
      }
      return true;
    }

    if (block.type === 'quote') {
      if (!block.data.text || typeof block.data.text !== 'string') {
        console.warn('Quote block invalid:', block);
        return false;
      }
      return true;
    }

    if (block.type === 'image') {
      if (!block.data.file || !block.data.file.url) {
        console.warn('Image block missing URL:', block);
        return false;
      }
      return true;
    }

    console.warn('Unsupported block type:', block.type);
    return false; // Filter out unsupported block types
  });

  console.log('Validated blocks:', validBlocks);
  return {
    ...content,
    blocks: validBlocks,
    time: content.time || Date.now(),
    version: content.version || '2.31.0-rc.7',
  };
};

const EditorJSEditor = ({ content, onChange, onImageUpload }) => {
  const editorHolderId = 'editorjs';
  const editorRef = useRef(null);
  const editorInstance = useRef(null);
  const lastContentRef = useRef(null);
  const isUpdatingRef = useRef(false);

  const handleEditorChange = useCallback(async () => {
    if (editorInstance.current && !isUpdatingRef.current) {
      try {
        const outputData = await editorInstance.current.save();
        console.log('Saved editor data:', outputData);
        const contentString = JSON.stringify(outputData);
        if (lastContentRef.current !== contentString) {
          lastContentRef.current = contentString;
          if (onChange) {
            onChange(outputData);
          }
        }
      } catch (error) {
        console.error('Failed to save editor data:', error);
      }
    }
  }, [onChange]);

  useEffect(() => {
    if (editorRef.current && !editorInstance.current) {
      const initialContent = content ? validateEditorContent(content) : { blocks: [] };
      console.log('Initializing editor with content:', initialContent);

      const newEditorInstance = new EditorJS({
        holder: editorHolderId,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: 'Enter a heading',
              levels: [1, 2, 3, 4, 5, 6],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered',
            },
          },
          quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+O',
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: "Quote's author",
            },
          },
          image: {
            class: ImageTool,
            config: {
              uploader: {
                uploadByFile(file) {
                  return new Promise((resolve, reject) => {
                    try {
                      if (onImageUpload) {
                        onImageUpload([file]).then((url) => {
                          resolve({
                            success: 1,
                            file: { url },
                          });
                        }).catch(reject);
                      } else {
                        const url = URL.createObjectURL(file);
                        resolve({
                          success: 1,
                          file: { url },
                        });
                      }
                    } catch (error) {
                      reject(error);
                    }
                  });
                },
              },
            },
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
            config: {
              placeholder: 'Start writing...',
              preserveBlank: true,
            },
          },
        },
        data: initialContent,
        onChange: handleEditorChange,
        placeholder: "Let's write an awesome story!",
        minHeight: 300,
      });

      newEditorInstance.isReady
        .then(() => {
          console.log('Editor initialized successfully');
          editorInstance.current = newEditorInstance;
          lastContentRef.current = JSON.stringify(initialContent);
        })
        .catch((error) => {
          console.error('Editor initialization failed:', error);
        });
    }

    return () => {
      if (editorInstance.current && typeof editorInstance.current.destroy === 'function') {
        try {
          editorInstance.current.destroy();
        } catch (error) {
          console.error('Error destroying editor:', error);
        }
        editorInstance.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (editorInstance.current && content) {
      const contentString = JSON.stringify(content);
      if (lastContentRef.current !== contentString && !isUpdatingRef.current) {
        console.log('Updating editor with new content:', content);
        editorInstance.current.isReady
          .then(() => {
            isUpdatingRef.current = true;
            const validatedContent = validateEditorContent(content);
            console.log('Rendering validated content:', validatedContent);
            return editorInstance.current.render(validatedContent);
          })
          .then(() => {
            lastContentRef.current = contentString;
            isUpdatingRef.current = false;
            console.log('Editor content rendered successfully');
          })
          .catch((error) => {
            console.error('Editor render failed:', error);
            isUpdatingRef.current = false;
          });
      }
    }
  }, [content]);

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      <div
        id={editorHolderId}
        ref={editorRef}
        className="p-4 min-h-[300px] prose max-w-none"
        style={{ outline: 'none' }}
      />
    </div>
  );
};

export default EditorJSEditor;