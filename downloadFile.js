function downloadFile() {
    var fileName = 'myCV.pdf';

    var filePath = 'C:/Users/DELL/OneDrive/Documents/Internship/' + fileName;

    var link = document.createElement('a');
    link.href = filePath;
    link.download = fileName;
    link.click();
}