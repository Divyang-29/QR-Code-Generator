let text = document.getElementById('textBox');
let image = document.getElementById('QrImage');

function generate(){
    if (text.value.trim() === "") {
        alert("Please enter some text or URL");
        return;
    }
    image.src = "https://quickchart.io/qr?text=" + encodeURIComponent(text.value);
    image.style.display = "block";
}
