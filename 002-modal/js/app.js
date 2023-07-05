const openModalBtn = document.querySelector('.open')
const closeModalBtn = document.querySelector('.close')
const modal = document.querySelector('#modal')
const overlay = document.querySelector('#overlay')

openModalBtn.addEventListener('click', () => {
    modal.classList.add('visible')
    overlay.classList.add('visible')
})

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('visible')
    overlay.classList.remove('visible')
})

overlay.addEventListener('click', () => {
    modal.classList.remove('visible')
    overlay.classList.remove('visible')
})