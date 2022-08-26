function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const idade = form.querySelector('.idade');

        let pessoa = {
            'nome': nome.value,
            'sobrenome': sobrenome.value,
            'peso': Number(peso.value),
            'idade': Number(idade.value)
        }

        pessoas.push(pessoa);
        console.log(pessoa);

        resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} pesa ${pessoa.peso}kg e tem ${pessoa.idade} anos de idade</p>`;
    }

    form.addEventListener('submit', recebeEventoForm)
}

meuEscopo();