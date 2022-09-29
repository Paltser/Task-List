const form = document.querySelector('form')
const taskinput = document.querySelector('#task')

form.addEventListener("submit", addTask)

function addTask(e){
    //create list item
    console.log(taskinput.value)
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(taskinput.value))
    li.className = 'collection-item'
    const  a = document.createElement('a')
    a.appendChild(document.createTextNode('x'))
    a.className = 'blue-text text-darken aligin right'
    a.setAttribute('href', '#')
    li.appendChild(a)

    //add to list
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    taskinput.value = ''

    e.preventDefault()
}