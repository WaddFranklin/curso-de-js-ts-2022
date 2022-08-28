const form = document.querySelector('#form');
const buttonCalcular = document.querySelector('#calcular');
const divResultado = document.querySelector('.resultado');

buttonCalcular.addEventListener('click', validaForm);

form.addEventListener('submit', function(event) {
    event.preventDefault();
});

function getImc(peso, altura) {
    return peso / altura ** 2;
}

function getStatusImc(imc) {
    if (imc <= 18.5) {
        return 'Abaixo do peso';
    } else if (imc <= 24.9) {
        return 'Peso normal';
    } else if (imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc <= 39.9) {
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}

function validaForm() {
    resetMessage();

    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if (!peso) {
        setMessage('Peso inválido!');
        divResultado.classList.remove('success');
        divResultado.classList.add('danger');
    } else if (!altura) {
        setMessage('Altura inválida!');
        divResultado.classList.remove('success');
        divResultado.classList.add('danger');
    } else {
        let imc = getImc(peso, altura).toFixed(2);
        let status = getStatusImc(imc);

        setMessage(`Seu IMC é ${imc} (${status}).`);
        divResultado.classList.remove('danger');
        divResultado.classList.add('success');
    }
}

function resetMessage() {
    divResultado.innerHTML = '';
}

function setMessage(messagem) {
    divResultado.innerHTML += messagem;
}