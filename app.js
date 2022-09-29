const form = document.querySelector('form')
const taskinput = document.querySelector('#task')
const tasklist = document.querySelector('ul')



form.addEventListener("submit", addTask)
tasklist.addEventListener('click', deltask)


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
    if(e.target.textContent == 'X'){
        if (confirm('Are you sure you want do delete this task?')){
            e.target.parentElement.remove()
        }
    }
}