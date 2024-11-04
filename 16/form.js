const form = document.forms.myForm; //Получаем форму
const nameField = form.elements.namedItem('name');
const emailField = form.elements.namedItem('email');
const ageField = form.elements.namedItem('age');
const selectField = form.elements.namedItem('mySelect');
const passwordField = form.elements.namedItem('password');
const optionField = form.elements.namedItem('firstSelect');
const submitBtn = document.querySelector('.form__submit');
let hasEmptyFields = false;

const formValues = [nameField.value, emailField.value, ageField.value, selectField, passwordField];

//Добавляем на неё обработчик события submit
form.addEventListener('submit', function (evt) {
evt.preventDefault();    //Отменяем стандартное поведение
form.reset(); //Сброс полей формы
  //Проверяем данные пользователя
});


const select = document.getElementById('mySelect');

mySelect.addEventListener('blur', function () {
    select.style.border = ''; // Восстановление стандартной границы после потери фокуса
});


const formOneFieldChange = (e) => {
    for (const value of formValues) {
        if (!value.length) {
            hasEmptyFields = true;
            break;
        }
    }

    if (hasEmptyFields) {
        submitBtn.setAttribute('disabled', "true");
    } else {
        submitBtn.removeAttribute('disabled');
    }
}
