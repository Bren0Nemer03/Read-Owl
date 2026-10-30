document.getElementById("formCadastro").addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuario = {
        nome: document.getElementById("nome").value,
        sobrenome: document.getElementById("sobrenome").value,
        cpf: document.getElementById("cpf").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        rua: document.getElementById("rua").value,
        cep: document.getElementById("cep").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
        telefone: document.getElementById("telefone").value
    };

    try {
        const resposta = await fetch("http://localhost:3000/usuarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        if (resposta.ok) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "login.html";
        } else {
            alert("Erro ao cadastrar usuário!");
        }
    } catch (error) {
        console.error("Erro:", error);
        alert("Erro ao conectar ao servidor!");
    }
});
