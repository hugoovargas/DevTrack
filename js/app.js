
// PROJETO
const botaoAdicionar = document.querySelector("#btn-adicionar-projeto");
const formularioProjeto = document.querySelector("#form-projeto");
const botaoCancelar = document.querySelector("#btn-cancelar-projeto");

const campoNome = document.querySelector("#nome-projeto");
const campoTecnologias = document.querySelector("#tecnologias-projeto");
const campoDescricao = document.querySelector("#descricao-projeto");

const listaProjetos = document.querySelector("#lista-projetos");
const mensagemProjetos = document.querySelector("#mensagem-projetos");

// ESTUDO


const botaoAdicionarEstudo = document.querySelector("#btn-adicionar-estudo");
const formularioEstudo = document.querySelector("#form-estudo");
const botaoCancelarEstudo = document.querySelector("#btn-cancelar-estudo");

const campoTemaEstudo = document.querySelector("#tema-estudo");
const campoTecnologiaEstudo = document.querySelector("#tecnologia-estudo");
const campoDuracaoEstudo = document.querySelector("#duracao-estudo");
const campoDataEstudo = document.querySelector("#data-estudo");
const campoDescricaoEstudo = document.querySelector("#descricao-estudo");

const listaEstudos = document.querySelector("#lista-estudos");
const mensagemEstudos = document.querySelector("#mensagem-estudos");



// Abre o formulário
botaoAdicionar.addEventListener("click", function () {
    formularioProjeto.hidden = false;
});

botaoAdicionarEstudo.addEventListener("click", function () {
    formularioEstudo.hidden = false;

    campoDataEstudo.value = new Date().toLocaleDateString("en-CA");
    campoTemaEstudo.focus();
});

// Cancela o cadastro
botaoCancelar.addEventListener("click", function () {
    formularioProjeto.hidden = true;
    formularioProjeto.reset();
});

botaoCancelarEstudo.addEventListener("click", function () {
    formularioEstudo.reset();
    formularioEstudo.hidden = true;
});

// Cadastra um projeto
formularioProjeto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const projeto = {
        nome: campoNome.value.trim(),
        tecnologias: campoTecnologias.value.trim(),
        descricao: campoDescricao.value.trim()
    };

    const cartao = document.createElement("article");

    const titulo = document.createElement("h4");
    titulo.textContent = projeto.nome;

    const tecnologias = document.createElement("p");
    tecnologias.textContent = `Tecnologias: ${projeto.tecnologias}`;

    cartao.append(titulo, tecnologias);

    if (projeto.descricao !== "") {
        const descricao = document.createElement("p");
        descricao.textContent = projeto.descricao;
        cartao.append(descricao);
    }

    listaProjetos.append(cartao);

    mensagemProjetos.hidden = true;
    formularioProjeto.hidden = true;
    formularioProjeto.reset();
});