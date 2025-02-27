function entrar() {
    // Captura os valores inseridos pelo usuário
    const user = document.getElementById('user').value;
    const senha = document.getElementById('senha').value;

    // Verifica se o usuário e senha não estão vazios
    if (user === "" || senha === "") {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const usuarios = [
        { user: 'admin', senha: '1234' },
        { user: 'usuario', senha: 'senha123' }
    ];

    const usuarioValido = usuarios.find(u => u.user === user && u.senha === senha);

    if (usuarioValido) {
        // Armazenar a sessão do usuário, exemplo usando localStorage
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioValido));

        // Redireciona para a página de gerenciamento de tarefas
        window.location.href = 'server.html'; // A página de gerenciamento de tarefas
    } else {
        alert('Usuário ou senha incorretos.');
    }
}
