import Modal from './modal.js'

const modal = Modal();

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

const checkButtons = document.querySelectorAll(".action a.check");

checkButtons.forEach(button => {
    button.addEventListener("click", handleClick)
});


const deleteButton = document.querySelectorAll(".action a.delete");

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
});

function handleClick(event, check = true) {
    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir esta pergunta'

    modal.open()
};

/* 1:40:29 */