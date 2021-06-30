export class Input {
    constructor(value, onChange) {
        this.value = value
        this.onChange = onChange
    }
    render() {
        const input = document.createElement('input')
        input.setAttribute('class', 'form-control px-2 mx-2 fs-5 ')

        input.value = this.value
        input.addEventListener('input', (e) => {
            this.onChange(e.target.value)
        })
        return input

    }

}