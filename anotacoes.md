Diferença de array para objeto:
    Array: 
        const array = []
    Objeto:
        const objeto = {}

template usado:
<script src="script.js">
    const perguntas = [
        {
            pergunta: "Pergunta 01",
            respostas: [
                "Resposta A",
                "Resposta B",
                "Resposta C",
            ],
            correta: 2
        },
    ]
    alert(perguntas[0].respostas[perguntas[0].correta])
</script>