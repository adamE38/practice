const taskList = document.querySelector('#task-list')
const form = document.querySelector('#task-form')
const input = document.querySelector('#task-input')

form.addEventListener('submit', e => {
    e.preventDefault()
    if (!input.value) return
    const taskElement = document.createElement('li')
    taskElement.innerText = input.value
    taskElement.classList.add('remove')

    taskList.appendChild(taskElement)
    input.value = ''

    taskElement.addEventListener('click', () => {
        taskList.removeChild(taskElement)
    })

})