const form = document.querySelector('form')
const taskinput = document.querySelector('#task')
const tasklist = document.querySelector('ul')
const removelist = document.querySelector('#Remove-all')

form.addEventListener("submit", addTask)
tasklist.addEventListener('click', deltask)
removelist.addEventListener('click', RemoveAll)

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
    //remove from list

    e.preventDefault()
}


function deltask(e) {
    if(e.target.textContent === 'x')
        if (confirm('Are you sure you want do delete this task?')) {
            e.target.parentElement.remove()
        }
}

function RemoveAll(e) {
    if (e.target.textContent === 'Remove all') {
        if (confirm('Are you sure you wanna remove all?')){
            while (tasklist.firstChild){
                tasklist.removeChild(tasklist.firstChild)
            }
        }
    }
}