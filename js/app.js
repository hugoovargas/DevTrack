
// PROJETO
const botaoAdicionar = document.querySelector("#btn-adicionar-projeto");
const formularioProjeto = document.querySelector("#form-projeto");
const botaoCancelar = document.querySelector("#btn-cancelar-projeto");

const campoNome = document.querySelector("#nome-projeto");
const campoTecnologias = document.querySelector("#tecnologias-projeto");
const campoDescricao = document.querySelector("#descricao-projeto");

const listaProjetos = document.querySelector("#lista-projetos");
const mensagemProjetos = document.querySelector("#mensagem-projetos");

const CHAVE_STORAGE = "devtrack-projetos";

let projetos = JSON.parse(localStorage.getItem(CHAVE_STORAGE)) ?? [];

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

const CHAVE_ESTUDOS = "devtrack-estudos";

let estudos = JSON.parse(localStorage.getItem(CHAVE_ESTUDOS)) ?? [];

// Abre form-projeto
botaoAdicionar.addEventListener("click", function () {
    formularioProjeto.hidden = false;
});

// Abre form-estudo
botaoAdicionarEstudo.addEventListener("click", function () {
    formularioEstudo.hidden = false;

    campoDataEstudo.value = new Date().toLocaleDateString("en-CA");
    campoTemaEstudo.focus();
});

// Cancela form-projeto
botaoCancelar.addEventListener("click", function () {
    formularioProjeto.hidden = true;
    formularioProjeto.reset();
});

// Cancela form-estudo
botaoCancelarEstudo.addEventListener("click", function () {
    formularioEstudo.reset();
    formularioEstudo.hidden = true;
});

// Salva a lista de projetos no navegador
function salvarProjetos() {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(projetos));
}

// Salva a lista de estudo no navegador
function salvarEstudos() {
    localStorage.setItem(CHAVE_ESTUDOS, JSON.stringify(estudos));
}

// Exclui projeto
function excluirProjeto(id) {
    const confirmar = confirm("Deseja realmente excluir este projeto?");

    if (!confirmar) {
        return;
    }

    projetos = projetos.filter(function (projeto) {
        return projeto.id !== id;
    });

    salvarProjetos();
    renderizarProjetos();
}

// Cadastra um projeto
formularioProjeto.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const projeto = {
        id: crypto.randomUUID(),
        nome: campoNome.value.trim(),
        tecnologias: campoTecnologias.value.trim(),
        descricao: campoDescricao.value.trim()
    };

    projetos.push(projeto);

    salvarProjetos();
    renderizarProjetos();
});

formularioEstudo.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const duracao = Number(campoDuracaoEstudo.value);

    if (!Number.isInteger(duracao) || duracao <= 0) {
        alert("Informe uma duração em minutos maior que zero.");
        return;
    }

    const estudo = {
        id: crypto.randomUUID(),
        tema: campoTemaEstudo.value.trim(),
        tecnologia: campoTecnologiaEstudo.value.trim(),
        duracao: duracao,
        data: campoDataEstudo.value,
        descricao: campoDescricaoEstudo.value.trim()
    };

    estudos.push(estudo);
    salvarEstudos();
    renderizarEstudos();
});

function renderizarProjetos() {
    listaProjetos.replaceChildren();

    projetos.forEach(function (projeto) {
        const cartao = document.createElement("article");
        cartao.classList.add("project-card");

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

        const botoes = document.createElement("div");
        botoes.classList.add("project-action");

        const botaoExcluir = document.createElement("button");
        botaoExcluir.type = "button";
        botaoExcluir.textContent = "Excluir";
        botaoExcluir.classList.add("botao-excluir");

        botaoExcluir.addEventListener("click", function () {
            excluirProjeto(projeto.id);
        });

        botoes.append(botaoExcluir);
        cartao.append(botoes);

        listaProjetos.append(cartao);

        });

    formularioProjeto.reset();
    formularioProjeto.hidden = true;
    //totalProjetos.textContent = projetos.length;
    mensagemProjetos.hidden = projetos.length > 0;
}

function renderizarEstudos() {
  listaEstudos.replaceChildren();

  const estudosOrdenados = [...estudos].sort(function (a, b) {
    return b.data.localeCompare(a.data);
  });

  estudosOrdenados.forEach(function (estudo) {
    const cartao = document.createElement("article");
    cartao.classList.add("cartao-estudo");

    const titulo = document.createElement("h4");
    titulo.textContent = estudo.tema;

    const tecnologia = document.createElement("p");
    tecnologia.textContent = `Tecnologia: ${estudo.tecnologia}`;

    const duracao = document.createElement("p");
    duracao.textContent = `Duração: ${estudo.duracao} minutos`;

    const data = document.createElement("p");
    data.textContent = `Data: ${estudo.data}`;

    cartao.append(titulo, tecnologia, duracao, data);

    if (estudo.descricao !== "") {
      const descricao = document.createElement("p");
      descricao.textContent = estudo.descricao;
      cartao.append(descricao);
    }

    listaEstudos.append(cartao);
  });


  formularioEstudo.reset();
  formularioEstudo.hidden = true;
  
  mensagemEstudos.hidden = estudos.length > 0;
}

renderizarProjetos();
renderizarEstudos();