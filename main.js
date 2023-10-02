// definindo a classe contatos
class Contatos {
    constructor(nome, email, telefone, comentario) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
}

// definindo a classe gerenciadorContatos
class GerenciadorContatos {
    constructor(){
        //inicialize a lista de contatos vazia
        this.contatos = []
    }

    adicionarContato(contato) {
        // adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }
    exibirContatos() {
        // ontem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

        //Limpa a lista de contatos
        listaContatos.innerHTML = '';

        //Para cada contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome}' - ${contato.email} - ${contato.telefone} - ${contato.comentario}`;
            listaContatos.appendChild(li)
        }
    }
}

// cria um objeto da classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// cria os elementos necessarios
const contatoForm = document.getElementById('contato-form')
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const comentF = document.getElementById('comentario');
const mostrarContatos = document.getElementById('mostrar-contato');
const ocultarContatos = document.getElementById('ocultar-contato');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;
    const comentario = comentF.value;

    // Criando objeto da classe contato
    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = ''
    emailF.value = ''
    telefoneF.value = ''
    comentF.value = ''
});



// estamos adicionando um manipulador de evemtos para o botão mostrar contatos, que exibe a lisya de contatos
mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', ()=>{
    listaContatos.style.display = 'none'
})


