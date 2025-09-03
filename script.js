document.addEventListener('DOMContentLoaded', () => {

    // Seletores de elementos do HTML
    const botaoDeAcessibilidade = document.getElementById('gaviao-btn');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alternar-contraste');
    const reiniciarAcessibilidade = document.getElementById('reiniciar-acessibilidade');

    // Estado inicial e tamanho da fonte base
    let tamanhoAtualFonte = 1; 
    const tamanhoFonteOriginal = parseFloat(window.getComputedStyle(document.body).fontSize) / 16; 

    // 1. Funcionalidade do menu de acessibilidade (alterna visibilidade)
    botaoDeAcessibilidade.addEventListener('click', () => {
        const isExpanded = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
            fecharMenuDeAcessibilidade();
        } else {
            abrirMenuDeAcessibilidade();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && opcoesDeAcessibilidade.classList.contains('apresenta-lista')) {
            fecharMenuDeAcessibilidade();
        }
    });

    function abrirMenuDeAcessibilidade() {
        opcoesDeAcessibilidade.classList.add('apresenta-lista');
        opcoesDeAcessibilidade.classList.remove('hidden');
        botaoDeAcessibilidade.setAttribute('aria-expanded', 'true');
        const primeiroBotao = opcoesDeAcessibilidade.querySelector('button');
        if (primeiroBotao) {
            primeiroBotao.focus();
        }
    }

    function fecharMenuDeAcessibilidade() {
        opcoesDeAcessibilidade.classList.remove('apresenta-lista');
        opcoesDeAcessibilidade.classList.add('hidden');
        botaoDeAcessibilidade.setAttribute('aria-expanded', 'false');
        botaoDeAcessibilidade.focus();
    }

    // 2. Funcionalidade de controle de fonte (A+ e A-)
    aumentaFonteBotao.addEventListener('click', () => {
        // Limita o aumento da fonte para não quebrar o layout
        if (tamanhoAtualFonte < 1.5) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', () => {
        // Limita a diminuição da fonte para manter a legibilidade
        if (tamanhoAtualFonte > 0.8) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // 3. Funcionalidade de contraste de cores
    alternaContraste.addEventListener('click', () => {
        document.body.classList.toggle('alto-contraste');
        // Atualiza o atributo aria-pressed para indicar o estado do botão
        const isAltoContraste = document.body.classList.contains('alto-contraste');
        alternaContraste.setAttribute('aria-pressed', isAltoContraste);
    });

    // 4. Funcionalidade de reinício das configurações
    reiniciarAcessibilidade.addEventListener('click', () => {
        // Restaura o tamanho da fonte original
        document.body.style.fontSize = `${tamanhoFonteOriginal}rem`;
        tamanhoAtualFonte = tamanhoFonteOriginal;

        // Remove a classe de alto contraste
        if (document.body.classList.contains('alto-contraste')) {
            document.body.classList.remove('alto-contraste');
            alternaContraste.setAttribute('aria-pressed', false);
        }
    });
});