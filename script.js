function toggleKontak() {
    let kontakBox = document.getElementById("kontakBox");
    let btnKontak = document.getElementById("btnKontak");

    if (kontakBox.style.display === "none") {
        kontakBox.style.display = "block";
        btnKontak.innerText = "Hide";
    } else {
        kontakBox.style.display = "none";
        btnKontak.innerText = "More Info";
    }
}