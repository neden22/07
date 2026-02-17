document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    
    // Функція валідації окремого поля
    const validateField = (input, errorId, errorMessage, validationFn) => {
        const errorElement = document.getElementById(errorId);
        const isValid = validationFn(input.value);

        if (!isValid) {
            input.setAttribute('aria-invalid', 'true');
            errorElement.textContent = errorMessage;
            errorElement.classList.add('active');
            return false;
        } else {
            input.setAttribute('aria-invalid', 'false');
            errorElement.textContent = '';
            errorElement.classList.remove('active');
            return true;
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        let isFormValid = true;
        let firstInvalidInput = null;

        const isNameValid = validateField(
            nameInput, 
            'name-error', 
            "Будь ласка, введіть ваше повне ім'я.", 
            (val) => val.trim().length > 0
        );
        if (!isNameValid && !firstInvalidInput) firstInvalidInput = nameInput;

        const isEmailValid = validateField(
            emailInput, 
            'email-error', 
            "Введіть коректну електронну пошту.", 
            (val) => isValidEmail(val)
        );
        if (!isEmailValid && !firstInvalidInput) firstInvalidInput = emailInput;


        const isPasswordValid = validateField(
            passwordInput, 
            'password-error', 
            "Пароль має містити мінімум 8 символів.", 
            (val) => val.length >= 8
        );
        if (!isPasswordValid && !firstInvalidInput) firstInvalidInput = passwordInput;

        if (isNameValid && isEmailValid && isPasswordValid) {
            alert('Форма успішно відправлена! (Демо)');
            form.reset();
        } else {
            if (firstInvalidInput) {
                firstInvalidInput.focus();
            }
        }
    });
});