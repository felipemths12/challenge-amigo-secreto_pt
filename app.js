let amigos = [];

function nomesAmigos(){
    const lista = document.getElementById("listaAmigos");
    
    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e cria um li para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; // Define o nome do amigo no item da lista
        lista.appendChild(li); // Adiciona o li à lista HTML
    }
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const novoAmigo = input.value.trim(); // Captura o valor do input e remove espaços extras

    if (novoAmigo !== "") {
        amigos.push(novoAmigo); // Adiciona o nome ao array de amigos
        input.value = ""; // Limpa o input

        // Exibe a lista atualizada de amigos
        nomesAmigos();
    } else {
        alert("Digite um nome válido!"); // Caso o input esteja vazio
    }
}

nomesAmigos();

function sortearAmigo() {
    const gerarIndice = Math.floor(Math.random() * amigos.length) + 1; // Gera um número aleatório para o índice
    const resultadoSorteio = document.getElementById("resultado");
    const nomeSorteado = amigos[gerarIndice]; // Armazena dinamicamente o nome através do índice aleatório
    resultadoSorteio.innerHTML = `Amigo sorteado: ${nomeSorteado}` //Imprime na tela o nome do sorteado
}