function init() {
    const divDataHora = document.querySelector('#data-hora');
    const data = new Date();

    /* const dia = data.getDate();
    const mes = formataMes(data.getMonth());
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const diaSemana = formataDiaSemana(data.getDay()); */
    /* divDataHora.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`; */
    options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    divDataHora.innerHTML = data.toLocaleDateString('pt-BR', options);
    console.log(divDataHora.innerHTML);
}

function formataDiaSemana(dia) {
    switch (dia) {
        case 1:
            return "segunda-feira";
        case 2:
            return "terça-feira";
        case 3:
            return "quarta-feira";
        case 4:
            return "quinta-feira";
        case 5:
            return "sexta-feira";
        case 6:
            return "sábado";
        case 0:
            return "domingo";
        default:
            return "dia inválido";
    }
}

function formataMes(mes) {
    switch (mes) {
        case 0:
            return "janeiro";
        case 1:
            return "fevereiro";
        case 2:
            return "março";
        case 3:
            return "abril";
        case 4:
            return "maio";
        case 5:
            return "junho";
        case 6:
            return "julho";
        case 7:
            return "agosto";
        case 8:
            return "setembro";
        case 9:
            return "outubro";
        case 10:
            return "novembro";
        case 11:
            return "dezembro";
        default:
            return "mês inválido";
    }
}

init();