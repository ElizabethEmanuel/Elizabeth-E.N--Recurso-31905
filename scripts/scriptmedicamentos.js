// Função para ajustar a responsividade com JavaScript
function ajustarResponsividade() {
    const medicamentos = document.querySelectorAll('.medicamento');
    medicamentos.forEach(med => {
        if (window.innerWidth < 768) {
            med.style.maxWidth = '90%';
            med.style.margin = '10px auto';
        } else {
            med.style.maxWidth = '300px';
            med.style.margin = '20px';
        }
    });
}

// Chama a função ao carregar a página e ao redimensionar a janela
window.addEventListener('load', ajustarResponsividade);
window.addEventListener('resize', ajustarResponsividade);