document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const signupLink = document.getElementById('signup-link');

    function toggleForm(formId) {
        const form = document.getElementById(formId);
        form.classList.toggle('active');
    }

    loginBtn.addEventListener('click', () => {
        toggleForm('login-form');
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.closest('.form-container').id;
            toggleForm(formId);
        });
    });

    signupLink.addEventListener('click', (event) => {
        event.preventDefault();
        toggleForm('login-form');
        toggleForm('signup-form');
    });

    document.getElementById('login').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Por favor, preencha todos os campos do formulário');
            return;
        }

        alert('Login Bem-sucedido!\nUsername: ' + username);
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        toggleForm('login-form');
    });

    document.getElementById('signup').addEventListener('submit', function(event) {
        event.preventDefault();
        const signupUsername = document.getElementById('signup-username').value;
        alert('Registro Bem-sucedido!\nNovo Username: ' + signupUsername);
        document.getElementById('signup-username').value = '';
        document.getElementById('signup-email').value = '';
        document.getElementById('signup-password').value = '';
        toggleForm('signup-form');
    });
});
