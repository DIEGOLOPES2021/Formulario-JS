'use strict'

let banco = []

// let banco = [
//     {
//         nome : 'Matheus',
//         email : 'matheus112',
//         celular : 12345,
//         cidade : 'itapevi'
//     }
// ]

const setBanco = (banco) => localStorage.setItem('banco', JSON.stringify(banco))

const getBanco = () => JSON.parse(localStorage.getItem ('info')) ?? [];

const lerBanco = (key) => JSON.parse(localStorage.getItem(key))


const cadastroCliente = (banco) => {

    const texto = localStorage.getItem('banco');

	const objeto = JSON.parse(texto);
    const item = document.createElement('table')

    const userString = JSON.stringify(banco);

    item.classList.add('info')
    item.innerHTML = `
    <tr class="linha" id="linha">

        <td class="itens">${objeto[0].nome}</td>

        <td class="itens">${objeto[0].email}</td>

        <td class="itens">${objeto[0].celular}</td>

        <td class="itens">${objeto[0].cidade}</td>

        <td class="buttonItens">

            <button class="buttonEditar" value="">Editar</button>

            <button class="buttonExcluir" value="">Excluir</button>
        </td>
    </tr>
    `
    document.getElementById('info').appendChild(item)
}

const limparTarefas = () => {

    const teste = document.getElementById('infoa');


    while (teste.firstChild) {

        teste.removeChild(teste.lastChild);
    }
}

const atualizarTela = () => {

    limparTarefas();

    const texto = localStorage.getItem('banco');

	const objeto = JSON.parse(texto);

    banco.forEach ( (objeto, indice) => cadastroCliente (nome, objeto.email, objeto.celular, objeto.cidade, indice));
}

const cadastrar = (evento) => {


    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let celular = document.getElementById("celular").value
    let cidade = document.getElementById("cidade").value



    const click = document.getElementById('salvar').addEventListener('click', cadastrar)

        const banco = getBanco();
        
        banco.push ({'nome': nome, 
                    'email': email,
                    'celular': celular,
                    'cidade': cidade});

        setBanco(banco);
        // atualizarTela();
        console.log("ola")
        if (cadastrar) {
            cadastroCliente()    
        }
        
    }

document.getElementById('salvar').addEventListener('click', cadastrar)
atualizarTela()
