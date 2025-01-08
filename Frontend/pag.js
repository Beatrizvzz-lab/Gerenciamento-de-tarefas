// Função para capturar os dados do formulário e enviar ao backend
async function cadastrar() {
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const bairro = document.getElementById('bairro').value;
    const cep = document.getElementById('cep').value;
    const senha = document.getElementById('senha').value;
    const confirmacao = document.getElementById('confirmacao').value;

    // Verificação básica dos campos obrigatórios
    if (!nome || !email || !telefone || !rua || !numero || !bairro || !cep || !senha || !confirmacao) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmacao) {
        alert('As senhas não coincidem.');
        return;
    }

    // Monta o objeto com os dados do usuário
    const dadosUsuario = {
        nome,
        email,
        telefone,
        endereco: {
            rua,
            numero,
            bairro,
            cep
        },
        senha
    };

    try {
        // Envia os dados ao backend
        const response = await fetch('http://localhost:3000/gerenciador', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosUsuario)
        });

        // Verifica a resposta do backend
        if (!response.ok) {
            throw new Error('Erro ao cadastrar usuário.');
        }

        const result = await response.json();
        alert('Cadastro realizado com sucesso!');
        console.log('Resposta do backend:', result);

        // Opcional: limpar o formulário após o sucesso
        document.querySelector('.cadastro').reset();
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        alert('Ocorreu um erro ao realizar o cadastro.');
    }
}