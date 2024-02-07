const perguntas = [
    {
        pergunta: "Qual é a sintaxe correta para declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 5;",
            "variable myVar = 5;",
            "let myVar = 5;",
        ],
        correta: 2
    },
    {
        pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "!=",
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "deleteLast()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes não é um tipo de dados em JavaScript?",
        respostas: [
            "Number",
            "Boolean",
            "Character",
        ],
        correta: 2
    },
    {
        pergunta: "O que o método 'concat()' faz em JavaScript?",
        respostas: [
            "Remove um elemento de um array",
            "Concatena dois ou mais arrays",
            "Inverte um array",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
        respostas: [
            "Retorna o tipo de dados de uma variável",
            "Compara duas variáveis",
            "Converte uma string em número",
        ],
        correta: 0
    },
    {
        pergunta: "O que o método 'charAt()' faz em JavaScript?",
        respostas: [
            "Retorna o último caractere de uma string",
            "Retorna o primeiro caractere de uma string",
            "Concatena duas strings",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a maneira correta de escrever um comentário de linha única em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "/* Este é um comentário */",
            "' Este é um comentário",
        ],
        correta: 0
    },
    {
        pergunta: "Qual método JavaScript é usado para arredondar um número para o inteiro mais próximo?",
        respostas: [
            "round()",
            "ceil()",
            "floor()",
        ],
        correta: 0
    },
    {
        pergunta: "Qual dos seguintes métodos JavaScript é usado para selecionar elementos usando seu ID?",
        respostas: [
            "getElement()",
            "selectById()",
            "getElementById()",
        ],
        correta: 2
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
const qntCorretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')

for(const item of perguntas){
    //clona o item
    const quizItem = template.content.cloneNode(true)
    //modifica o titulo
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas){
        //dentro do dl procure o dt e clone o dt
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        //pegue o dt criado acima e coloque as respostas no lugar dos spans
        dt.querySelector('span').textContent = resposta
        //poder selecionar uma opção em cada pergunta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        //atualizar o value em cada input
        dt.querySelector('input').value=item.respostas.indexOf(resposta)
        
        //verificar e adicionar as questões corretas
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta
            //tirar ponto caso erre
            qntCorretas.delete(item)
            if(estaCorreta){
                qntCorretas.add(item)
            }
            //atualizar em tela a quantidade de acertos
            mostrarTotal.textContent = qntCorretas.size + ' de ' + totalDePerguntas
        }
        //mostre na tela
        quizItem.querySelector('dl').appendChild(dt)
    }
    //exclua o span "resposta a"
    quizItem.querySelector('dl dt').remove()
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
    //alert(item.pergunta)
}