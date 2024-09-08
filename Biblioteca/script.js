// script.js

// Função para definir os links de navegação
function setupNavigation() {
    // Mapeia os IDs dos botões para suas respectivas páginas
    const navMap = {
        'homeLink': 'index.html',
        'livrosLink': 'catalogo.html',
        'adicionarLivroLink': 'adicionarlivro.html',
        'editarLivroLink': 'editarlivro.html',
        'visualizarLivroLink': 'visualizarlivro.html'
    };

    // Adiciona eventos de clique nos elementos de navegação
    Object.keys(navMap).forEach(id => {
        const link = document.getElementById(id);
        if (link) {
            link.addEventListener('click', function () {
                window.location.href = navMap[id];
            });
        }
    });
}

// Executa a função após o carregamento da página
document.addEventListener('DOMContentLoaded', setupNavigation);
