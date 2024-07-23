
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.textContent;

        if (e.target.textContent === 'DEL') {
            input.textContent = input.textContent.slice(0, -1);
        } else if (e.target.textContent === '=') {
            let expression = input.textContent.trim();

            if (expression === '') {
                input.textContent = 'Please enter a valid statement';

                setTimeout(() => {
                    input.textContent = '';
                }, 4000);
            } else {
                try {
                    input.textContent = eval(expression);
                } catch {
                    input.textContent = 'Invalid Statement';
                }
            }
        } else if (e.target.textContent === 'c') {
            input.textContent = '';
        } else {
            input.textContent += e.target.textContent;
        }
    });
});
