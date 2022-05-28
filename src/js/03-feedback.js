import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let formData = {};
const STORAGE_KEY = "feedback-form-state";

form.addEventListener('submit', formHandler);
form.addEventListener('input', throttle(textFormormHandler, 500));

function formHandler(e) {
    e.preventDefault();
    form.reset();
    textarea.textContent = "";
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
};

function textFormormHandler(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))    
};

populateTextarea();

function populateTextarea() {
    const sawedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (sawedMessage && Object.keys(sawedMessage).length !== 0 ) {
        input.value = sawedMessage.email;
        textarea.textContent = sawedMessage.message;
        formData.email = sawedMessage.email;
        formData.message = sawedMessage.email;
    };
};

