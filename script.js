JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Menu Mobile Responsivo ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-menu');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        
        // Alterna o estado de expansão para leitores de tela
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
        
        // Efeito visual básico no botão sanduíche
        menuToggle.classList.toggle('open');
    });

    // Fecha o menu ao clicar em algum link (útil para navegação interna de página única)
    const navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });


    // --- Alternador de Alto Contraste (Acessibilidade) ---
    const contrastToggle = document.getElementById('contrast-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva anteriormente
    if (localStorage.getItem('highContrast') === 'enabled') {
        document.body.classList.add('high-contrast');
    }

    contrastToggle.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
        
        // Salva a preferência do usuário no navegador
        if (document.body.classList.contains('high-contrast')) {
            localStorage.setItem('highContrast', 'enabled');
        } else {
            localStorage.setItem('highContrast', 'disabled');
        }
    });
});