var tarefa = document.getElementById('tarefa');
var saida = document.getElementById('saida');


function novaTarefa() {
    var conteudo = document.createTextNode(tarefa.value);
    if (conteudo.length === 0) {
        alert("Digite uma tarefa")
    } else {
        var paragrafo = document.createElement('p');
        var input = document.createElement('input');
        var label = document.createElement('label');
        input.type = 'checkbox';
        paragrafo.appendChild(label)
        label.appendChild(input)
        label.appendChild(conteudo)
        saida.appendChild(paragrafo)
    }
}
