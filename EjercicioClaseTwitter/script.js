function agregarTweet() {
    var TextTW = document.getElementById("tweetIngreso").value;
    if (TextTW.trim() === "") {
    return;
}

var ContenedorTW = document.getElementById("ContenedorTW");

var tweetDiv = document.createElement("div");
    tweetDiv.className = "ContenedorTW";

var TextTWDiv = document.createElement("div");
    TextTWDiv.className = "TextTW";
    TextTWDiv.textContent = TextTW;

var BtnBorrar = document.createElement("button");
    BtnBorrar.className = "BtnBorrar";
    BtnBorrar.textContent = "Eliminar";
    BtnBorrar.addEventListener("click", function() {
        ContenedorTW.removeChild(tweetDiv);
});

tweetDiv.appendChild(TextTWDiv);
tweetDiv.appendChild(BtnBorrar);

ContenedorTW.appendChild(tweetDiv);

document.getElementById("tweetIngreso").value = "";
}

function actualizarHoraFecha() {
    var now = new Date();
    var datetimeDiv = document.getElementById("HoraFecha");
    datetimeDiv.innerHTML = now.toLocaleString();
}

actualizarHoraFecha();