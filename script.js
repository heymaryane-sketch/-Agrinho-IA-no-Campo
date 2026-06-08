// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    console.log("Agro Forte: Sistema de IA no Campo Inicializado.");

    // 1. ANIMAÇÃO AO ROLAR A PÁGINA (Scroll Reveal)
    // Faz com que os cards apareçam com um efeito suave quando entram na tela
    const cards = document.querySelectorAll('.card');
    
    const configAparicao = {
        threshold: 0.1, // Dispara quando 10% do card estiver visível
        rootMargin: "0px 0px -50px 0px"
    };

    const observador = new IntersectionObserver((elementos, observador) => {
        elementos.forEach(elemento => {
            if (elemento.isIntersecting) {
                elemento.target.style.opacity = "1";
                elemento.target.style.transform = "translateY(0)";
                observador.unobserve(elemento.target); // Para de observar após animar
            }
        });
    }, configAparicao);

    // Configuração inicial dos cards para a animação
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        observador.observe(card);
    });


    // 2. ADICIONANDO UM BOTÃO DE "MODO TECH" (DARK MODE) DINAMICAMENTE
    // Cria um botão elegante para alternar o visual da página
    const header = document.querySelector('header');
    const botaoTema = document.createElement('button');
    botaoTema.innerText = "Alternar Modo Tech";
    
    // Estilização rápida do botão via JS
    botaoTema.style.marginTop = "15px";
    botaoTema.style.padding = "8px 16px";
    botaoTema.style.border = "none";
    botaoTema.style.borderRadius = "20px";
    botaoTema.style.backgroundColor = "#ffffff";
    botaoTema.style.color = "#1b5e20";
    botaoTema.style.fontWeight = "bold";
    botaoTema.style.cursor = "pointer";
    botaoTema.style.transition = "all 0.3s ease";

    header.appendChild(botaoTema);

    // Função para alternar as cores da página (Light/Dark)
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
});