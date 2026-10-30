// Função para enviar os dados POST - CREATE
function enviarDados() {
    // Obter os valores dos campos informados pelo usuário
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var cpf = document.getElementById('identificadorCPF').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var rua = document.getElementById('rua').value;
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var telefone = document.getElementById('telefone').value;

    // Enviar uma função que puxa o valor de uma API - FETCH
    fetch('http://localhost:3000/pessoas', {
        method: 'POST', // Método POST HTTP
        headers: {
            'Content-Type': 'application/json' // Tipo de conteúdo enviado (JSON)
        },
        body: JSON.stringify({
            nome: nome, 
            sobrenome: sobrenome, 
            cpf: cpf, 
            email: email, 
            senha: senha, 
            rua: rua, 
            cep: cep, 
            cidade: cidade, 
            estado: estado, 
            telefone: telefone
        }) // Dados a serem enviados e convertidos para JSON
    })
    .then(resposta => resposta.json()) // Corrigido: converte a resposta para JSON
    .then(dados => {
        console.log(dados); // Exibe os dados da resposta no console
        alert("Cadastro realizado com sucesso!"); // Exibe uma mensagem de sucesso
        window.location.href = "login.html"; // Redireciona para a tela de login após o cadastro
    })
    .catch(erro => {
        console.error("Erro ao cadastrar:", erro); // Exibe o erro caso ocorra
        alert("Erro ao cadastrar usuário, tente novamente.");
    });
}
