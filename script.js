
// URL da API 
const apiUrl = 'http://localhost:3000/posts';

// Função para carregar os dados da publicação
function carregarPublicacao() {
    fetch(apiUrl, { // Faz a chamada para o endpoint definido em apiUrl
        method: 'GET', // Define o método HTTP como GET
        mode: 'cors', // Permite chamadas cross-origin
        headers: { 
            'Content-Type': 'application/json' // Define o cabeçalho correto para JSON
        }
    })
        .then(response => {
            if (!response.ok) { // Verifica se a resposta foi bem-sucedida (status 200–299)
                throw new Error(`Erro na resposta: ${response.status}`); // Lança um erro se o status não for bem-sucedido
            }
            return response.json(); // Converte a resposta em JSON
        })
        .then(result => {
            // Verifica se o objeto retornado possui a propriedade "data"
            if (!result.data || result.data.length === 0) { // Garante que a propriedade "data" não é nula ou vazia
                throw new Error("Nenhum dado disponível."); // Lança um erro caso "data" esteja vazio
            }

            const primeiroItem = result.data[0]; // Pega o primeiro item da lista "data" retornada pela API

            // Preenche os elementos do DOM com os dados do item
            document.getElementById('category').textContent = primeiroItem.category.name; // Atualiza o texto da categoria
            document.getElementById('date').textContent = `Publishes ${new Date(primeiroItem.created_at).toLocaleDateString()}`; // Formata e exibe a data de criação
            document.getElementById('title').textContent = primeiroItem.title; // Atualiza o texto do título
            document.getElementById('text').textContent = primeiroItem.description; // Atualiza o texto da descrição
            document.getElementById('author-name').textContent = primeiroItem.user.name; // Atualiza o nome do autor
            document.getElementById('author-image').src = primeiroItem.image_url || 'images/image-avatar.webp'; // Usa a imagem do autor ou uma padrão
            document.getElementById('card-image').src = 'images/blogImage.png'; // Define uma imagem padrão para o card
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error.message); // Exibe o erro no console caso algo dê errado
        });
}

// Adicionando evento para aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', carregarPublicacao); // Chama a função carregarPublicacao quando o DOM estiver completamente carregado



