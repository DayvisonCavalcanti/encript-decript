/*function btn_cripto() {
    document.getElementById("btn__cripto").style.display = "none";
    const textoCripto = document.getElementById("texto__cripto").value;
    const textoCriptografado = textoCripto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("mostrar__texto").textContent = textoCriptografado;
     textoCripto = document.getElementById("texto__cripto").value = "";

}*/
function encrypt() {
    document.getElementById("btn__cripto").style.display = "none";
    let text = document.getElementById("inputText").value;
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    document.getElementById("outputText").textContent = encryptedText;
    text = document.getElementById("texto__cripto").value = "";
}

function decrypt() {
    let text = document.getElementById("inputText").value;
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    document.getElementById("outputText").textContent = decryptedText;
}



/*function btn_descripto() {
    var textoDescripto = document.getElementById("texto__cripto").value;
    var textoDescritografado = textoDescripto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        document.getElementById("mostrar__texto").textContent = textoDescritografado;

        var textoDescripto = document.getElementById("texto__cripto").value = "";
       

}*/