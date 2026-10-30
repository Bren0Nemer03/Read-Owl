const API_URL = "http://localhost:3000/usuarios";

// ---------------- BUSCAR POR CPF ----------------
async function buscarCPF() {
  const cpf = document.getElementById("cpfBusca").value.trim();
  const resultadoDiv = document.getElementById("resultadoBusca");

  if (!cpf) {
    resultadoDiv.innerHTML = "<p>Digite um CPF!</p>";
    return;
  }

  const resposta = await fetch(`${API_URL}?cpf=${cpf}`);
  const dados = await resposta.json();

  if (dados.length === 0) {
    resultadoDiv.innerHTML = "<p>Nenhum usuário encontrado.</p>";
    return;
  }

  const user = dados[0];

  resultadoDiv.innerHTML = `
    <div class="card">
      <p><strong>Nome:</strong> ${user.nome}</p>
      <p><strong>CPF:</strong> ${user.cpf}</p>
      <p><strong>Email:</strong> ${user.email}</p>
    </div>
  `;
}


// ---------------- LISTAR TODOS ----------------
async function carregarUsuarios() {
  const resposta = await fetch(API_URL);
  const usuarios = await resposta.json();

  const tbody = document.querySelector("#tabelaUsuarios tbody");
  tbody.innerHTML = "";

  usuarios.forEach(user => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${user.id}</td>
      <td><input value="${user.nome}" id="nome-${user.id}"></td>
      <td><input value="${user.cpf}" id="cpf-${user.id}"></td>
      <td><input value="${user.email}" id="email-${user.id}"></td>
      <td>
        <button class="editar" onclick="editarUsuario(${user.id})">Editar</button>
        <button class="apagar" onclick="apagarUsuario(${user.id})">Apagar</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

carregarUsuarios();


// ---------------- EDITAR ----------------
async function editarUsuario(id) {
  const nome = document.getElementById(`nome-${id}`).value;
  const cpf = document.getElementById(`cpf-${id}`).value;
  const email = document.getElementById(`email-${id}`).value;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, cpf, email })
  });

  alert("Usuário atualizado!");
  carregarUsuarios();
}


// ---------------- APAGAR ----------------
async function apagarUsuario(id) {
  if (!confirm("Tem certeza que deseja apagar?")) return;

  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  carregarUsuarios();
}
