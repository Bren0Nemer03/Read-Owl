const form = document.getElementById('loginForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try {
    // Verificando se o e-mail e a senha batem com algum usuário no JSON Server
    const response = await fetch(`http://localhost:3000/usuarios?email=${email}&senha=${senha}`);
    const data = await response.json();

    console.log(data); // Adicionado para verificar a resposta no console

    if (data.length > 0) {
      // Se encontrou um usuário com esse e-mail e senha, loga e redireciona
      alert("Login realizado com sucesso!");
      window.location.href = "livros.html"; // Redireciona para a página de livros
    } else {
      alert("E-mail ou senha incorretos!");
    }
  } catch (error) {
    console.error("Erro ao fazer login", error);
    alert("Erro ao se conectar com o servidor.");
  }
});
