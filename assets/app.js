const botonEncriptar = document.getElementById('encriptar');
const botonDesencriptar = document.getElementById('desencriptar');

function encriptar(){
    const textoDesencriptado = document.getElementById('texto').value;
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

function desencriptar(){
    const textoEncriptado = document.getElementById('texto').value;
    const textoDesencriptado = textoEncriptado
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes","i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
    
    return textoDesencriptado;
}

function modificarContenido(){
    const imagen = document.getElementById('img-ilustracion');
    const subtitulo = document.getElementById('subtitulo');
    const cajaBoton = document.getElementById('caja-boton-copiar');
    imagen.classList.add('hidden');
    subtitulo.classList.add('hidden');
    cajaBoton.classList.remove('hidden');
}

function mostrarEncriptacion(){
    const parrafo = document.getElementById('mensaje');
    if(encriptar() != ""){
        modificarContenido();
        parrafo.innerHTML = encriptar();
    }
}

function mostrarDesencriptacion(){
    const parrafo = document.getElementById('mensaje');
    if(desencriptar() != ""){
        modificarContenido();
        parrafo.innerHTML = desencriptar();
    }
}

botonEncriptar.addEventListener('click', mostrarEncriptacion);
botonDesencriptar.addEventListener('click', mostrarDesencriptacion);