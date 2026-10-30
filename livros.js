document.addEventListener('DOMContentLoaded', async () => {
  // Seleciona os containers de cada categoria
  const romanceContainer = document.getElementById('romance-container');
  const fantasiaContainer = document.getElementById('fantasia-container');
  const popularesContainer = document.getElementById('populares-container');

  // Verifica se os containers existem
  if (!romanceContainer || !fantasiaContainer || !popularesContainer) {
    console.error('Containers de livros não encontrados!');
    return;
  }

  try {
    // Faz a requisição para o servidor
    const response = await fetch('http://localhost:3000/livros');
    const livros = await response.json();

    // Função para criar cada card de livro
    function criarCard(livro) {
      const card = document.createElement('div');
      card.classList.add('livro-card');

      card.innerHTML = `
        <img src="${livro.imagem}" alt="Capa do livro ${livro.nome}">
        <div class="livro-info">
          <h3>${livro.nome}</h3>
          <p>${livro.autor}</p>
          <span class="preco">R$ ${livro.preco.toFixed(2)}</span>
          <button class="btn-comprar">Comprar</button>
        </div>
      `;
      return card;
    }

    // Preenche cada container com os livros da categoria
    livros.forEach(livro => {
      if (livro.categoria === 'romance') {
        romanceContainer.appendChild(criarCard(livro));
      } else if (livro.categoria === 'fantasia') {
        fantasiaContainer.appendChild(criarCard(livro));
      } else if (livro.categoria === 'populares') {
        popularesContainer.appendChild(criarCard(livro));
      }
    });

  } catch (error) {
    console.error('Erro ao carregar os livros:', error);
    romanceContainer.innerHTML = '<p>Não foi possível carregar os livros.</p>';
    fantasiaContainer.innerHTML = '<p>Não foi possível carregar os livros.</p>';
    popularesContainer.innerHTML = '<p>Não foi possível carregar os livros.</p>';
  }
});
