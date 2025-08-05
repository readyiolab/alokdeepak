import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { editorJSToHtml } from './editorUtils';

const EditorJSPreview = ({ content, onClose }) => {
  const htmlContent = editorJSToHtml(content);
  console.log('Preview HTML content:', htmlContent);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto p-6 relative">
        <Button
          variant="ghost"
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </Button>
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Content Preview</h1>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </div>
  );
};

export default EditorJSPreview;