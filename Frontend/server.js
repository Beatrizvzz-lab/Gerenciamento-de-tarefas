async function sendTaskToBackend(task) {
    try {
      const response = await fetch('http://localhost:3000/rotina', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task) // Enviamos o objeto "task" completo
      });
  
      if (!response.ok) {
        throw new Error('Erro ao adicionar tarefa no backend');
      }
  
      const result = await response.json();
      console.log('Tarefa adicionada ao backend:', result);
    } catch (error) {
      console.error('Erro ao comunicar com o backend:', error);
    }
  }
  
  function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const priority = document.getElementById('priority').value;
    const status = document.getElementById('status').value;
    const deadline = document.getElementById('deadline').value;
    const responsible = document.getElementById('responsible').value;
    const hours = document.getElementById('hours').value;
  
    // Verifica os campos obrigatórios
    if (title && deadline && responsible && hours) {
      const task = {
        title,
        description,
        priority,
        status,
        deadline,
        responsible,
        hours
      };
  
      // Adiciona a tarefa no frontend (exibição na interface)
      const taskList = document.getElementById('taskList');
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <h3>${title}</h3>
        <p><strong>Descrição:</strong> ${description}</p>
        <p><strong>Prioridade:</strong> ${priority}</p>
        <p><strong>Status:</strong> ${status}</p>
        <p><strong>Prazo:</strong> ${deadline}</p>
        <p><strong>Responsável:</strong> ${responsible}</p>
        <p><strong>Horas Gastas:</strong> ${hours}</p>
      `;
      taskList.appendChild(taskElement);
  
      // Limpa o formulário
      document.getElementById('taskForm').reset();
  
      // Envia a tarefa para o backend
      sendTaskToBackend(task);
    } else {
      alert('Preencha todos os campos obrigatórios!');
    }
  }
  