const skills = document.querySelectorAll('.skill-box');
const descricao = document.querySelector('.texto-descricao');
const sobreSkill = [
    '<p>HTML</p> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
    '<p>CSS</p> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
    '<p>JavaScript</p> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
    '<p>ReactJS</p> <br> <p>O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</p> <br>',
    '<p>NodeJS</p> <br> <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p> <br>',
    '<p>Git</p> <br> <p>É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.</p> <br>',
    '<p>Github</p> <br> <p>É uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. </p> <br>',
    '<p>Java</p> <br> <p>É uma linguagem de programação orientada a objeto, bastante utilizada na construção de APIs e tecnologias IoT.'
]

const dataInicio = [
    (new Date(2022, 06, 16)).getTime(),
    (new Date(2022, 07, 01)).getTime(),
    (new Date(2022, 07, 10)).getTime(),
    (new Date(2022, 08, 02)).getTime(),
    (new Date(2022, 07, 10)).getTime(),
    (new Date(2022, 06, 16)).getTime(),
    (new Date(2022, 06, 17)).getTime(),
    (new Date(2022, 08, 15)).getTime(),
]
const dataHoje = (new Date()).getTime();

skills.forEach((elemento, index) => {
    let index1 = index;
    let elemento1 = elemento;
    elemento.addEventListener('mouseover', (evento) => {
        let tempo = 'mês';
        let tempoDeExperiencia = Math.round((dataHoje - dataInicio[index1]) / (1000 * 60 * 60 * 24 * 30));
        if (tempoDeExperiencia > 1) tempo = 'meses'
        descricao.innerHTML = `<p>${sobreSkill[index1]} </p>`;
    })
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    })
});