// Variáveis
const botaoEnvio = document.querySelector('#enviar');
const botaoReset = document.querySelector('#refresh');
let mesPreencher = document.querySelector('#obrigatorio');
let volume = document.querySelector('#volume');
let res = document.querySelector('#res');

// Funções
function calc() {
    let numVolume = parseFloat(volume.value); // parseFloat para aceitar números decimais
    if (isNaN(numVolume)) {
        alert('Por favor, insira um valor válido para o volume.');
        return;
    }
    let logNumber = Math.log10(numVolume);
    res.innerHTML = (0.2 + (0.02 * logNumber)) * numVolume;
}

function limpar(){
    let volume = document.querySelector('#volume').value = ''
    res.innerHTML = ''
}

// Escutar eventos
botaoEnvio.addEventListener('click', calc);
botaoReset.addEventListener('click', limpar)