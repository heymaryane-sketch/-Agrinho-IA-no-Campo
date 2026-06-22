// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("Agro Forte: Sistema de IA e Acessibilidade Inicializado.");

    // ==========================================
    // INSERÇÃO DINÂMICA DAS IMAGENS ENVIADAS
    // ==========================================
    const cardsLista = document.querySelectorAll('.card');
    
    if (cardsLista.length >= 3) {
        // Função auxiliar para aplicar um estilo padrão e responsivo nas imagens
        const estilizarImagem = (img) => {
            img.style.width = "100%";
            img.style.height = "200px";
            img.style.objectFit = "cover";
            img.style.borderRadius = "6px";
            img.style.marginBottom = "15px";
            img.style.display = "block";
        };

        // 1. Inserindo a imagem dos Tratores no Card 1 (Piloto Automático)
        const imgTrator = document.createElement('img');
        imgTrator.src = 'A tractor on the field waters the plants with pesticides_ royalty free stock image.jpeg';
        imgTrator.alt = 'Tratores agrícolas inteligentes aplicando insumos com precisão centimétrica no campo.';
        estilizarImagem(imgTrator);
        // Insere a imagem logo abaixo do título do primeiro card
        cardsLista[0].insertBefore(imgTrator, cardsLista[0].querySelector('p'));

        // 2. Inserindo a imagem do Drone no Card 3 (Tratores Autônomos / Tecnologia)
        const imgDrone = document.createElement('img');
        imgDrone.src = '_.jpeg';
        imgDrone.alt = 'Drone tecnológico sobrevoando e monitorando as linhas de plantio da lavoura.';
        estilizarImagem(imgDrone);
        // Insere a imagem logo abaixo do título do terceiro card
        cardsLista[2].insertBefore(imgDrone, cardsLista[2].querySelector('p'));
    }

    // ==========================================
    // 1. ANIMAÇÃO AO ROLAR A PÁGINA (Scroll Reveal)
    // ==========================================
    const cards = document.querySelectorAll('.card');
    
    const configAparicao = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observador = new IntersectionObserver((elementos, observador) => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";
                observador.unobserve(elemento.target);
            }
        });
    }, configAparicao);

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observador.observe(card);
    });


    // ==========================================
    // 2. CRIAÇÃO DA BARRA DE ACESSIBILIDADE E TEMA
    // ==========================================
    const header = document.querySelector('header');
    
    // Container para agrupar os botões de acessibilidade
    const containerAcessibilidade = document.createElement('div');
    containerAcessibilidade.style.marginTop = "20px";
    containerAcessibilidade.style.display = "flex";
    containerAcessibilidade.style.gap = "10px";
    containerAcessibilidade.style.justifyContent = "center";
    containerAcessibilidade.style.flexWrap = "wrap";

    // Estilo base padrão para os botões
    const estiloBotao = (btn) => {
        btn.style.padding = "8px 16px";
        btn.style.border = "none";
        btn.style.borderRadius = "20px";
        btn.style.backgroundColor = "#ffffff";
        btn.style.color = "#1b5e20";
        btn.style.fontWeight = "bold";
        btn.style.cursor = "pointer";
        btn.style.transition = "all 0.3s ease";
        btn.style.fontSize = "0.9rem";
    };

    // Botão de Alternar Tema (Claro/Escuro)
    const botaoTema = document.createElement('button');
    botaoTema.innerText = "Alternar Modo Tech";
    estiloBotao(botaoTema);

    // Botão de Aumentar Letra (A+)
    const botaoAumentar = document.createElement('button');
    botaoAumentar.innerText = "A+ Aumentar Texto";
    estiloBotao(botaoAumentar);

    // Botão de Diminuir Letra (A-)
    const botaoDiminuir = document.createElement('button');
    botaoDiminuir.innerText = "A- Diminuir Texto";
    estiloBotao(botaoDiminuir);

    // Adiciona os botões ao container e o container ao header
    containerAcessibilidade.appendChild(botaoTema);
    containerAcessibilidade.appendChild(botaoAumentar);
    containerAcessibilidade.appendChild(botaoDiminuir);
    header.appendChild(containerAcessibilidade);


    // ==========================================
    // 3. LOGICA DO MODAL DE TEMA (CLARO / ESCURO)
    // ==========================================
    botaoTema.addEventListener('click', () => {
        const root = document.documentElement;
        const corAtual = getComputedStyle(root).getPropertyValue('--bg-light').trim();

        if (corAtual === '#f4f6f4') {
            // Ativa o Modo Tech (Escuro)
            root.style.setProperty('--bg-light', '#121212');
            root.style.setProperty('--card-bg', '#1e1e1e');
            root.style.setProperty('--text-dark', '#e0e0e0');
            botaoTema.style.backgroundColor = "#1b5e20";
            botaoTema.style.color = "#ffffff";
            botaoTema.innerText = "Modo Campo (Claro)";
        } else {
            // Retorna ao Modo Campo (Claro)
            root.style.setProperty('--bg-light', '#f4f6f4');
            root.style.setProperty('--card-bg', '#ffffff');
            root.style.setProperty('--text-dark', '#263238');
            botaoTema.style.backgroundColor = "#ffffff";
            botaoTema.style.color = "#1b5e20";
            botaoTema.innerText = "Modo Tech (Escuro)";
        }
    });


    // ==========================================
    // 4. LÓGICA DE ACESSIBILIDADE (TAMANHO DA FONTE)
    // ==========================================
    let tamanhoAtualFonte = 100; // Representa 100%

    botaoAumentar.addEventListener('click', () => {
        if (tamanhoAtualFonte < 140) { // Limite máximo de segurança para não quebrar o layout
            tamanhoAtualFonte += 10;
            document.body.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });

    botaoDiminuir.addEventListener('click', () => {
        if (tamanhoAtualFonte > 90) { // Limite mínimo de segurança
            tamanhoAtualFonte -= 10;
            document.body.style.fontSize = `${tamanhoAtualFonte}%`;
        }
    });
});