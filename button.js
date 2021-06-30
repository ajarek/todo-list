 export class Button {
    constructor(label, onClick) {
        this.label = label
        this.onClick = onClick
    }
    render(){
    const button=document.createElement('button')
    button.setAttribute('class','btn btn-primary px-5')
    button.setAttribute('type','button')
    button.innerText=this.label

    button.addEventListener('click',()=>{
        this.onClick()
        button.style.transform=`scale(1)`
    })
    button.addEventListener('mousedown',()=>{
        button.style.transform=`scale(0.9)`
    })
     return button
    }

       
    

}
