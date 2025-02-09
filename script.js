// Impede o clique direito (context menu)
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Impede o arrasto das imagens
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('dragstart', function(event) {
        event.preventDefault(); // Impede o arrasto da imagem
    });
});

// Bloqueia atalhos específicos de teclado
document.addEventListener("keydown", function(event) {
    // Impede o Ctrl + U (Visualizar código-fonte)
    if (event.ctrlKey && (event.key === "u" || event.key === "U")) {
        event.preventDefault();
    }

    // Impede o Ctrl + Shift + I (Ferramentas de desenvolvedor)
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
    }

    // Impede o F12 (Ferramentas de desenvolvedor)
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Impede o Ctrl + Shift + C (Inspecionar elementos)
    if (event.ctrlKey && event.shiftKey && event.key === "C") {
        event.preventDefault();
    }

    // Impede o Ctrl + Shift + J (Console de JavaScript)
    if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault();
    }

    // Impede o F11 (Modo de tela cheia)
    if (event.key === "F11") {
        event.preventDefault();
    }

    // Impede o Ctrl + Shift + F (Buscar elementos na página)
    if (event.ctrlKey && event.shiftKey && event.key === "F") {
        event.preventDefault();
    }
});

// Impede a seleção de texto (copiar e colar)
document.addEventListener("selectstart", function(event) {
    event.preventDefault();
});
