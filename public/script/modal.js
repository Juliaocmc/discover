export default function Modal() {

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        //funcionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close() {
        modalWrapper.classList.remove("active")

    }

    return {
        open,
        close
    }
}

// export { Modal }
