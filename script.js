// const URL = 'http://localhost:3000/users';

// async function chamarApi() {
//     const resp = await fetch(URL);

//     if(resp.status === 200) {
//         const obj = await resp.json();
//      console.log(obj);
//     }
 
// }

// chamarApi();

// URL da API real (JSONPlaceholder)
const apiUrl = 'http://localhost:3000/posts/1450479d-98a1-4b12-a2b4-4d50e2860e46';

// Função para carregar os dados da publicação
function carregarPublicacao() {
    fetch(apiUrl,{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
          }
    })
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => {
            const {data: info} = data; 
            // Preencher os elementos do DOM com os dados da publicação
            document.getElementById('category').textContent = 'Learning'; // A categoria nao esta disponível na API, entao definimos um valor fixo
            document.getElementById('date').textContent = `Publishes ${new Date().toLocaleDateString()}`; // Usamos a data atual
            document.getElementById('title').textContent = info.title; // Preenche o título com o dado da API
            document.getElementById('text').textContent = info.description; // Preenche o texto com o dado da API
            document.getElementById('author-name').textContent = 'Autor'; // Nao ha autor, entao definimos um nome fixo
            document.getElementById('author-image').src = 'images/image-avatar.webp'; // Coloca uma imagem padrao
            document.getElementById('card-image').src = 'images/blogImage.png'; // Coloca uma imagem padrao
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error); // Exibe o erro no console caso algo de errado
        });
}

// Adicionando evento para aguardar o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', carregarPublicacao);




