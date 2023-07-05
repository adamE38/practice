const openModalBtn = document.querySelector('.open')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')
const closingElements = [closeModalBtn, overlay]

openModalBtn.addEventListener('click', () => {
    openModal()
})

closingElements.forEach(element => {
    element.addEventListener('click', () => {
        closeModal()
    })
})

function openModal() {
    modal.classList.add('visible')
    overlay.classList.add('visible')
}

function closeModal() {
    modal.classList.remove('visible')
    overlay.classList.remove('visible')
}