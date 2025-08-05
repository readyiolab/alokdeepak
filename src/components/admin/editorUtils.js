export const editorJSToHtml = (content) => {
  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    return '<p>No content available</p>';
  }

  return content.blocks
    .map((block) => {
      switch (block.type) {
        case 'paragraph':
          return `<p class="text-gray-700 leading-relaxed">${block.data.text || ''}</p>`;
        case 'header':
          const level = block.data.level || 2;
          return `<h${level} class="text-gray-900 font-bold mt-4 mb-2 ${
            level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl'
          }">${block.data.text || ''}</h${level}>`;
        case 'list':
          const tag = block.data.style === 'ordered' ? 'ol' : 'ul';
          const items = block.data.items
            .map((item) => `<li class="text-gray-700">${item}</li>`)
            .join('');
          return `<${tag} class="list-${block.data.style === 'ordered' ? 'decimal' : 'disc'} pl-6 my-2">${items}</${tag}>`;
        case 'quote':
          return `
            <blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-4">
              <p>${block.data.text || ''}</p>
              ${block.data.caption ? `<cite class="block text-sm text-gray-500 mt-2">— ${block.data.caption}</cite>` : ''}
            </blockquote>`;
        case 'image':
          return `<img src="${block.data.file?.url || ''}" alt="${block.data.caption || 'Image'}" class="w-full max-w-md h-auto rounded-lg my-4 mx-auto object-cover" />`;
        default:
          return '';
      }
    })
    .join('');
};