function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    //console.log(elemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.pianoTecla');
//console.log(listaDeTeclas);

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#pianoTecla-${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
        //console.log(idAudio);
    }
  
    onkeydown = function (evento) {
        
        if (evento.code === 'KeyA') {
            const tecla = listaDeTeclas[0];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-do');
        }
        if (evento.code === 'KeyS') {
            const tecla = listaDeTeclas[1];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-re');
        }
        if (evento.code === 'KeyD') {
            const tecla = listaDeTeclas[2];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-mi');
        }
        if (evento.code === 'KeyF') {
            const tecla = listaDeTeclas[3];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-fa');
        }
        if (evento.code === 'KeyG') {
            const tecla = listaDeTeclas[4];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-sol');
        }
        if (evento.code === 'KeyH') {
            const tecla = listaDeTeclas[5];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-la');
        }
        if (evento.code === 'KeyJ') {
            const tecla = listaDeTeclas[6];
            tecla.classList.add('ativa');
            tocaSom('#pianoTecla-si');
        }

    }

   onkeyup = function () {
        document.querySelector('.do').classList.remove('ativa');
        document.querySelector('.re').classList.remove('ativa');
        document.querySelector('.mi').classList.remove('ativa');
        document.querySelector('.fa').classList.remove('ativa');
        document.querySelector('.sol').classList.remove('ativa');
        document.querySelector('.la').classList.remove('ativa');
        document.querySelector('.si').classList.remove('ativa');
    }

}