export class Ui {
    constructor() {

    }
    render() {
        const div = document.createElement('div')
        div.setAttribute('class', "container-lg  d-flex flex-column p-4")
        div.innerHTML = `<div class="form d-flex justify-content-between mb-3"></div>`
        return div
    }

}