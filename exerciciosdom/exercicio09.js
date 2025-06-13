const uploadInput = document.getElementById('upload');
    const previewImg = document.getElementById('preview');

    uploadInput.addEventListener('change', () => {
      const file = uploadInput.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
          previewImg.src = e.target.result;
          previewImg.style.display = 'block';
        }

        reader.readAsDataURL(file);
      } else {
        previewImg.src = '';
        previewImg.style.display = 'none';
      }
    });