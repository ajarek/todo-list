import {Button} from "./button.js"
import {Input} from "./input.js"
import {Ui} from "./ui.js"

const task = []
const ui1 = new Ui()
const input1 = new Input('', (newText) => task.unshift(newText))
const button1 = new Button('add', () => {
    receive()
})

document.body.append(ui1.render())
document.querySelector('.form').append(input1.render(), button1.render())


function receive() {
    clean()
    const wrap = document.createElement('div')
    wrap.innerHTML = `<ul class="list-group ">
    <li class="list-group-item d-flex justify-content-between fs-5">${task[0]}<button  class="btn btn-danger">X</button></li>
    </ul>`
    wrap.setAttribute('class', 'd-flex flex-column bd-highlight mb-3')
    document.querySelector('.container-lg').append(wrap)
    marked()
    deleteTask()
}

function clean() {
    document.querySelector('input').value = ''
}

function deleteTask() {
    document.querySelectorAll('li .btn').forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.parentElement.remove()
        })
    });
}

function marked() {
    document.querySelectorAll('ul').forEach(element => {
        element.addEventListener('click', (e) => {
            e.target.classList.toggle('active1')
        })
    })
}