document.addEventListener('DOMContentLoaded', () => {

    // 1. Funcionalidade do menu de acessibilidade
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    
    // Alterna a visibilidade do painel e o ícone do botão de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', () => {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
        
        // Atualiza o atributo aria-expanded para leitores de tela
        const isExpanded = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !isExpanded);
    });

    // 2. Funcionalidade de controle de fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    
    let tamanhoAtualFonte = 1; // Unidade base: rem

    aumentaFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', () => {
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    // 3. Funcionalidade de contraste de cores
    const alternaContraste = document.getElementById('alterna-contraste');
    
    // Adiciona ou remove uma classe para alternar o esquema de cores
    alternaContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
    });

});