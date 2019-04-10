let searchInput = document.querySelector('.search-input');
let squareSearch = document.querySelector('.square-search');
let triangle = document.querySelector('.triangle');
let search = document.querySelector('.search');
let name = document.getElementById('inputName');
let email = document.getElementById('inputEmail');
let message = document.getElementById('inputMessage');
let bigMainSection = document.getElementById('big-main');
let carousel = document.getElementById('carousel');
let isOpen = false;
let counter = 12;
let descriptionOpen = false;
const MESSAGES = [];
let currentImage = 0;

class Message {
    constructor(name, email, message, id, time) {
        this.name = name;
        this.email = email;
        this.message = message;
        this.id = id;
        this.time = time;
    }
}

let backgrounds = [
    "./images/1600x1000.jpg",
    "./images/1600x1000-2.jpg",
    "./images/1600x1000-3.jpg",
    "./images/1600x1000-4.jpg",
    "./images/1600x1000-5.jpg",
    "./images/1600x1000-6.jpg",
    "./images/1600x1000-7.jpg"
];

function sliderRight() {
    if (currentImage == (backgrounds.length - 1)) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    bigMainSection.style.backgroundImage = `url(${backgrounds[currentImage]})`;
}

function sliderLeft() {
    if (currentImage == 0) {
        currentImage = (backgrounds.length - 1);
    } else {
        currentImage--;
    }
    bigMainSection.style.backgroundImage = `url(${backgrounds[currentImage]})`;
}

setInterval(() => {
    sliderRight();
}, 5000);

function sendMessage(event) {
    event.preventDefault();
    if (name.value === '' || email.value === '' || message.value === '') {
        alert('empty input')
        return;
    }
    MESSAGES.push(new Message(name.value,
        email.value, message.value,
        id = Math.round(Math.random() * 10000), date = new Date()));
    console.log(MESSAGES);
    clearInputs(event);

}

function clearInputs(event) {
    event.preventDefault();
    name.value = '';
    email.value = '';
    message.value = '';
}

search.addEventListener('click', () => {
    if (isOpen === false) {
        searchInput.style.visibility = 'visible';
        squareSearch.style.visibility = 'visible';
        triangle.style.visibility = 'visible';
        isOpen = true;
    } else {
        searchInput.style.visibility = 'hidden';
        squareSearch.style.visibility = 'hidden';
        triangle.style.visibility = 'hidden';
        isOpen = false;
    }
}, true);

function makeLike(event) {
    let like = event.target.parentNode.childNodes[2];
    like.innerHTML = `${counter += 1}`;
}

function closeOpenSection(event) {
    let square = event.target.parentNode;
    if (descriptionOpen === false) {
        square.innerHTML = '<img src="./images/minus.jpg" alt="minus">';
        descriptionOpen = true;
        square.parentNode.childNodes[5].style.display = 'none';
    } else {
        square.innerHTML = '<img src="./images/plus.jpg" alt="plus"></img>';
        square.parentNode.childNodes[5].style.display = 'block';
        descriptionOpen = false;
    }
}



