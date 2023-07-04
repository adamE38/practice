const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const currentClicks = Number(button.dataset.clicks)
        button.dataset.clicks = currentClicks + 1
    })
})