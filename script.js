document.addEventListener('DOMContentLoaded', () => {
  const fileList = document.getElementById('file-list');
  fetch('files.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch file list.');
      }
      return response.json();
    })
    .then(files => {
      fileList.innerHTML = ''; // clear default message
      files.forEach(file => {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.href = file;
        link.textContent = file;
        link.target = '_blank';
        li.appendChild(link);
        fileList.appendChild(li);
      });
    })
    .catch(error => {
      fileList.innerHTML = `<li class="error">Failed to load files: ${error.message}</li>`;
    });
});
