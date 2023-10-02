document.querySelectorAll('.box-input input').forEach(input => {
    function toggleLabel() {
        const label = input.nextElementSibling;
        label.classList.toggle('label-up', input === document.activeElement || input.value);
    }

    input.addEventListener('focus', toggleLabel);
    input.addEventListener('blur', toggleLabel);
    input.addEventListener('input', toggleLabel);
});

function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailRegex.test(emailInput.value)) {
        emailError.textContent = '';
        emailInput.style.borderColor = 'green';
        return true;
    } else {
        emailError.textContent = 'Invalid email address';
        emailInput.style.borderColor = 'red';
        return false;
    }
}

function validatePassword() {
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (passwordRegex.test(passwordInput.value)) {
        passwordError.textContent = '';
        passwordInput.style.borderColor = 'green';
        return true;
    } else {
        passwordError.innerHTML = `
                                <ul>
                                    <li>Password must be: </li>
                                    <li>- at least 8 characters</li>
                                    <li>- contain a capital letter</li>
                                    <li>- contain a number</li>
                                    <li>- contain a special character ($%^&)</li>
                                </ul>
                                `;
        passwordInput.style.borderColor = 'red';
        return false;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const emailValid = validateEmail();
        const passwordValid = validatePassword();

        if (!emailValid || !passwordValid) {
            event.preventDefault(); 
        }
    });
});