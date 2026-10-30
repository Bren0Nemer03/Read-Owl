fetch('http://localhost:3000/pessoas')
    .then(resposta => resposta.json())
    .then(dados => {
        //Selecionar a tabela tbody
        var tabelaCorpo = document.getElementById('tabela-corpo')

        //Para cada objeto do JSON, cria uma linha da tabela
        dados.forEach(objeto => {
            var tr = document.createElement('tr')
            var tdId = document.createElement('td')
            var tdNome = document.createElement('td')
            var tdSobrenome = document.createElement('td')
            var tdCpf = document.createElement('td')
            var tdEmail = document.createElement('td')
            var tdSenha = document.createElement('td')
            var tdRua = document.createElement('td')
            var tdCep = document.createElement('td')
            var tdCidade = document.createElement('td')
            var tdEstado = document.createElement('td')
            var tdTelefone = document.createElement('td')

            //Preenche as celula da linha com as informações
            tdId.innerText = objeto.id
            tdNome.innerText = objeto.nome
            tdSobrenome.innerText = objeto.sobrenome
            tdCpf.innerText = objeto.cpf
            tdEmail.innerText = objeto.email
            tdSenha.innerText = objeto.senha
            tdRua.innerText = objeto.rua
            tdCep.innerText = objeto.cep
            tdCidade.innerText = objeto.cidade
            tdEstado.innerText = objeto.estado
            tdTelefone.innerText = objeto.telefone

            tr.appendChild(tdId)
            tr.appendChild(tdNome)
            tr.appendChild(tdSobrenome)
            tr.appendChild(tdCpf)
            tr.appendChild(tdEmail)
            tr.appendChild(tdSenha)
            tr.appendChild(tdRua)
            tr.appendChild(tdCep)
            tr.appendChild(tdCidade)
            tr.appendChild(tdEstado)
            tr.appendChild(tdTelefone)
            tabelaCorpo.appendChild(tr)
        })
    })