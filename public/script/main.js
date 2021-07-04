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
    event.preventDefault();

    const slug = check ? "check" : "delete"

    const roomId = document.querySelector("#room-id").dataset.id;

    const dataId = event.target.dataset.id;

    const form = document.querySelector('.modal form');
    form.setAttribute("action", `/question/${roomId}/${dataId}/${slug}`)

    modalTitle.innerHTML = check ? 'Marcar como lida' : 'Excluir esta pergunta'
    modalDescription.innerHTML = check ? "Tem certeza que deseja marcar como lida?" : "Tem certeza que deseja excluir esta pergunta?"
    modalButton.innerHTML = check ? "sim, marcar" : "sim, excluir"
    modal.open()
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
};
