document.getElementById('fileInput').onchange = function (evt) {
    const [file] = this.files;
    if (file) {
        document.getElementById('imgPreview').src = URL.createObjectURL(file);
    }
}