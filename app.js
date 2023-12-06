let porcentagem = parseInt(100);
console.log(porcentagem);
textos()

function textos() {
    //Textos dos status
    mostrarTexto('.tamagoshi-status-fome', `Fome: ${porcentagem}%`);
    mostrarTexto('.tamagoshi-status-diversao', `Diversão: ${porcentagem}%`);
    mostrarTexto('.tamagoshi-status-higiene', `Higiene: ${porcentagem}%`);
    mostrarTexto('.tamagoshi-status-diciplina', `Diciplina: ${porcentagem}%`);

    //texto dos botões
    mostrarTexto('.tamagoshi-acoes-alimentar', 'Alimentar');
    mostrarTexto('.tamagoshi-acoes-brincar', 'Brincar');
    mostrarTexto('.tamagoshi-acoes-limpar', 'Limpar');
    mostrarTexto('.tamagoshi-acoes-educar', 'Educar');
}


function mostrarTexto(id, texto){
    let classe = document.querySelector(id);
    console.log(classe);
    classe.innerHTML = texto;
}

function passagemTempo(status) {
    let problema = document.querySelector(status).porcentagem;
    console.log(problema);
    do {
       problema--;
    } while (problema > 0);
}

console.log(mostrarTexto);
