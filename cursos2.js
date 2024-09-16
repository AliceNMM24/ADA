document.addEventListener('DOMContentLoaded', () => {  // Adiciona um listener que executa a função quando o DOM está completamente carregado
    const addCourseForm = document.getElementById('add-course-form');  // Obtém o formulário de adicionar curso pelo ID
    const courseList = document.getElementById('course-list');  // Obtém o div onde a lista de cursos será exibida pelo ID

    // Função para atualizar a lista de cursos
    const updateCourseList = () => {
        const courses = JSON.parse(localStorage.getItem('courses')) || [];  // Obtém a lista de cursos do localStorage ou inicializa como um array vazio se não existir
        courseList.innerHTML = courses.map((course, index) => `  // Mapeia os cursos para criar o HTML para cada um
            <div class="course-item">  <!-- Cria um container para cada item de curso -->
                <a href="${course.link}" target="_blank">${course.name}</a>  <!-- Cria um link para o curso com o nome e o link armazenados -->
                <button onclick="editCourse(${index})">Editar</button>  <!-- Botão para editar o curso, chamando a função editCourse com o índice do curso -->
                <button onclick="deleteCourse(${index})">Excluir</button>  <!-- Botão para excluir o curso, chamando a função deleteCourse com o índice do curso -->
            </div>
        `).join('');  // Junta todos os itens de curso em uma única string HTML e define como o conteúdo interno do div
    };

    // Adicionar um novo curso
    addCourseForm.addEventListener('submit', (event) => {  // Adiciona um listener para o evento de submissão do formulário
        event.preventDefault();  // Impede o comportamento padrão do formulário (que seria o envio da página)
        const name = document.getElementById('course-name').value;  // Obtém o nome do curso do campo de entrada
        const link = document.getElementById('course-link').value;  // Obtém o link do curso do campo de entrada

        const courses = JSON.parse(localStorage.getItem('courses')) || [];  // Obtém a lista de cursos do localStorage ou inicializa como um array vazio se não existir
        courses.push({ name, link });  // Adiciona o novo curso à lista de cursos
        localStorage.setItem('courses', JSON.stringify(courses));  // Salva a lista atualizada no localStorage

        document.getElementById('course-name').value = '';  // Limpa o campo de entrada do nome do curso
        document.getElementById('course-link').value = '';  // Limpa o campo de entrada do link do curso

        updateCourseList();  // Atualiza a lista de cursos exibida na tela
    });

    // Editar um curso
    window.editCourse = (index) => {  // Define a função editCourse globalmente para que possa ser chamada a partir do HTML
        const courses = JSON.parse(localStorage.getItem('courses')) || [];  // Obtém a lista de cursos do localStorage ou inicializa como um array vazio se não existir
        const course = courses[index];  // Obtém o curso a ser editado com base no índice

        const newName = prompt('Novo nome do curso:', course.name);  // Solicita ao usuário um novo nome para o curso
        const newLink = prompt('Novo link do curso:', course.link);  // Solicita ao usuário um novo link para o curso

        if (newName !== null && newLink !== null) {  // Verifica se o usuário forneceu um novo nome e link (não cancelou o prompt)
            courses[index] = { name: newName, link: newLink };  // Atualiza o curso na lista com os novos valores
            localStorage.setItem('courses', JSON.stringify(courses));  // Salva a lista atualizada no localStorage
            updateCourseList();  // Atualiza a lista de cursos exibida na tela
        }
    };

    // Excluir um curso
    window.deleteCourse = (index) => {  // Define a função deleteCourse globalmente para que possa ser chamada a partir do HTML
        const courses = JSON.parse(localStorage.getItem('courses')) || [];  // Obtém a lista de cursos do localStorage ou inicializa como um array vazio se não existir
        courses.splice(index, 1);  // Remove o curso da lista com base no índice
        localStorage.setItem('courses', JSON.stringify(courses));  // Salva a lista atualizada no localStorage
        updateCourseList();  // Atualiza a lista de cursos exibida na tela
    };

    // Inicializar a lista de cursos
    updateCourseList();  // Atualiza a lista de cursos exibida na tela ao carregar a página
});
