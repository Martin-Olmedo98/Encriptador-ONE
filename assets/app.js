let botonEncriptar = document.getElementById('encriptar');
let botonDesencriptar = document.getElementById('desencriptar');

function encriptar(){
    let textoDesencriptado = document.getElementById('texto').value;
    let textoEncriptado = "";
    
    for (let index = 0; index < textoDesencriptado.length; index++) {
        if (textoDesencriptado[index] == "a") {
            textoEncriptado += "ai";
        } else if (textoDesencriptado[index] == "e") {
            textoEncriptado += "enter";
        } else if (textoDesencriptado[index] == "i") {
            textoEncriptado += "imes";
        } else if (textoDesencriptado[index] == "o") {
            textoEncriptado += "ober";
        } else if (textoDesencriptado[index] == "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += textoDesencriptado[index];
        }
    }

    return textoEncriptado;
}
