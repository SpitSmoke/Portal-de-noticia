$(document).ready(function() {
    // Função para manipular o clique no botão do menu
    function toggleMenu() {
        $('.menu').slideToggle();
    }

    // Verifica se a largura da tela é menor que 768 pixels
    if (window.matchMedia('(max-width: 768px)').matches) {
        // Associa a função ao clique do botão apenas em telas menores que 768 pixels
        $('.botao-menu button').click(toggleMenu);
    }

    // Se precisar de funcionalidade adicional para telas maiores, pode adicionar aqui

});


