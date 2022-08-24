const dragElements = document.getElementById("dragElements")
const dropZone = document.getElementById("dropZone")

const draggableElements = dragElements.children

let draggingElement
// let draggingElementParent

for (let i = 0; i < draggableElements.length; i++) {
    const element = draggableElements[i];
    element.draggable = true

    element.ondrag = (event) =>{
        draggingElement = event.target
        if(draggingElement.parentNode===dragElements){
            dragElements.removeChild(draggingElement)
        }
    }

    // element.ondragend = ()=>{
        
    // }
}

dropZone.ondragover = (event)=>{
    event.preventDefault()
}

dropZone.ondrop = (event)=>{
    console.log(event)
    dropZone.appendChild(draggingElement)
}

dragElements.ondragover = (event)=>{
    event.preventDefault()
    dragElements.style.backgroundColor = "#717ec3"
}

dragElements.ondragleave = ()=>{
    dragElements.style.backgroundColor = "transparent"
}

dragElements.ondrop = (event)=>{
    console.log(event)
    dragElements.appendChild(draggingElement)
    dragElements.style.backgroundColor = "transparent"
}


// Dos retos: 
// - Completar la zona naranja
// - Si se cancela el dragging regresar a su posicion original