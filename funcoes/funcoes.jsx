

    /*
     Normaliza o texto para a forma NFD (Normalization Form Decomposition) e remove os diacríticos usando regex
    .normalize('NFD') // Decomposição dos caracteres acentuados
    .replace(/[\u0300-\u036f]/g, ''); // Remove os diacríticos
    */


const texto = "Olá, você está bem? Não se esqueça de dar uma olhada nos detalhes.";
const textoSemAcento = removerAcentos(texto);

function encrypt() {
    document.getElementById("text__cripto").style.display = "none";
    var text = document.getElementById("inputText").value;
    var textoSemAcento = text.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
    var encryptedText = textoSemAcento.toLowerCase().replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encryptedText;
    text = document.getElementById("inputText").value = "";
    document.querySelector(".text__cripto2").style.display = "block";
}

function decrypt() {
    var text = document.getElementById("inputText").value;
    var decryptedText = text.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("outputText").value = decryptedText;
    document.getElementById('inputText').value = "";
}

function copiar() {
    var text = document.getElementById("outputText").value;
    document.getElementById("inputText").value = text;
    document.getElementById("outputText").value = "";

}
