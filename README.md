# DevTrack — Painel de Desenvolvimento

O **DevTrack** é uma aplicação web desenvolvida para ajudar desenvolvedores a organizar seus projetos, registrar suas atividades de estudo e acompanhar seu progresso em relação a metas semanais.

O projeto foi desenvolvido com HTML, CSS e JavaScript puro, com foco na manipulação do DOM, tratamento de eventos e armazenamento de dados no navegador.

## Funcionalidades

### Dashboard
- Visualização da quantidade de projetos cadastrados.
- Acompanhamento das horas estudadas na semana atual.
- Visualização do progresso em relação à meta semanal.

### Gerenciamento de projetos
- Cadastro de projetos com nome, tecnologias utilizadas e descrição.
- Listagem dos projetos cadastrados.
- Exclusão de projetos com confirmação.
- Persistência dos projetos no navegador.

### Diário de estudos
- Registro de atividades com tema, tecnologia, duração e data.
- Inclusão de anotações sobre o conteúdo estudado.
- Listagem das atividades em ordem cronológica decrescente.
- Exclusão de atividades registradas.
- Atualização automática do resumo de horas estudadas.

### Metas semanais
- Definição de uma meta semanal de estudo.
- Validação da meta entre 1 e 168 horas, em intervalos de meia hora.
- Barra de progresso que acompanha o cumprimento da meta.
- Cálculo das horas estudadas de segunda-feira a domingo.
- Persistência da meta definida pelo usuário.

## Tecnologias utilizadas

- **HTML5:** estruturação semântica da aplicação e criação de formulários.
- **CSS3:** estilização da interface, tema escuro, cartões, layout com CSS Grid e efeitos de interação.
- **JavaScript (Vanilla JS):** lógica da aplicação, manipulação do DOM, eventos, validações e atualização dinâmica da interface.
- **LocalStorage:** armazenamento dos projetos, registros de estudo e meta semanal no navegador.

## Conceitos praticados

Durante o desenvolvimento, foram aplicados conceitos importantes do desenvolvimento front-end:

- Seleção e manipulação de elementos HTML com `querySelector`.
- Criação dinâmica de elementos com `createElement`.
- Manipulação de classes CSS com `classList`.
- Tratamento de eventos com `addEventListener`.
- Manipulação de arrays com métodos como `push`, `filter`, `forEach` e `sort`.
- Uso de objetos para representar projetos e atividades de estudo.
- Persistência de dados com `localStorage`, `JSON.stringify` e `JSON.parse`.
- Validação de formulários e prevenção do comportamento padrão de envio.
- Manipulação de datas e cálculo de intervalos semanais.
- Organização da interface com CSS Grid e variáveis CSS.
- Uso de atributos ARIA para melhorar a acessibilidade de componentes.

## Como executar o projeto

O DevTrack não exige instalação de dependências nem processo de build.

1. Clone o repositório ou baixe os arquivos do projeto.
2. Abra a pasta do projeto no seu editor de código.
3. Abra o arquivo `index.html` no navegador.

A estrutura esperada dos arquivos é:

```text
devtrack/
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js
```

## Armazenamento de dados

Os dados são armazenados localmente no navegador por meio do `localStorage`. Isso permite que projetos, atividades de estudo e a meta semanal continuem disponíveis após recarregar a página, no mesmo navegador e origem.

A aplicação não utiliza banco de dados ou servidor backend nesta versão.

## Objetivo do projeto

O DevTrack foi criado como um projeto de prática e portfólio para consolidar conhecimentos de desenvolvimento web, desde a estruturação da interface até a implementação de funcionalidades com JavaScript.

Além de servir como ferramenta pessoal de organização, o projeto representa uma etapa de aprendizado em desenvolvimento front-end e pode evoluir futuramente com novas funcionalidades.

---

**Desenvolvido como projeto de estudo e portfólio.**
