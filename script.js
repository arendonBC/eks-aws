document.addEventListener('DOMContentLoaded', function () {
    const questionsPerPage = 5;
    const quizContainer = document.querySelector('.quiz-container');
    const questions = Array.from(document.querySelectorAll('.question'));
    const totalPages = Math.ceil(questions.length / questionsPerPage);

    questions.forEach((question, index) => {
        const questionNumber = document.createElement('div');
        questionNumber.classList.add('question-number');
        questionNumber.textContent = `Question ${index + 1}`;
        question.insertBefore(questionNumber, question.firstChild);
    });

    function renderPage(page) {
        const start = (page - 1) * questionsPerPage;
        const end = start + questionsPerPage;

        questions.forEach((q, index) => {
            if (index >= start && index < end) {
                q.style.display = 'block';
            } else {
                q.style.display = 'none';
            }
        });

        const paginatorButtons = document.querySelectorAll('.paginator button');
        paginatorButtons.forEach((btn, index) => {
            if (index + 1 === page) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        quizContainer.scrollIntoView({ behavior: 'smooth' });
    }

    const paginator = document.createElement('div');
    paginator.classList.add('paginator');

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => renderPage(i));
        paginator.appendChild(button);
    }

    quizContainer.appendChild(paginator);

    renderPage(1);
});
