let entradaTexto = "";
let saidaTexto = "";
let botaoCopiarTexto = "";
const regex = "[^a-z , ç ! ? ; : - + = _ - / \ % & @ # $ ¨ ( ) [ ] { } < >.]";

document.getElementById('painel__2').style.display = 'none';

function criptografarTexto() {
    let resultado = document.getElementById('resultado');
    entradaTexto = document.querySelector('textarea').value;

    saidaTexto = entradaTexto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    botaoCopiarTexto = saidaTexto;
    resultado.innerHTML = saidaTexto;

    document.getElementById('painel__1').style.display = 'none';
    document.getElementById('painel__2').style.display = 'block';
}

function descriptografarTexto() {
    let resultado = document.getElementById('resultado');
    entradaTexto = document.querySelector('textarea').value;

    saidaTexto = entradaTexto.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    botaoCopiarTexto = saidaTexto;
    resultado.innerHTML = saidaTexto;

    document.getElementById('painel__1').style.display = 'none';
    document.getElementById('painel__2').style.display = 'block';
}

function copiarTexto() {
    navigator.clipboard.writeText(botaoCopiarTexto);
}

function validarEntradaCriptografia() {
    entradaTexto = document.querySelector('textarea').value;

    if (!entradaTexto.match(regex)) {
        criptografarTexto();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('painel__1').style.display = 'block';
        document.getElementById('painel__2').style.display = 'none';
    }
}

function validarEntradaDescriptografia() {
    entradaTexto = document.querySelector('textarea').value;

    if (!entradaTexto.match(regex)) {
        descriptografarTexto();
    } else {
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('painel__1').style.display = 'block';
        document.getElementById('painel__2').style.display = 'none';
    }
}