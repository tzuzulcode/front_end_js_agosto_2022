const modalBtn = document.getElementById("modalBtn")
const closeModalBtn = document.getElementById("closeModalBtn")
const modal = document.getElementById("modal")
const modalContent = document.getElementById("modalContent")

document.body.onclick = ()=>{
    alert("Click en el body")
}

modalBtn.onclick = (event)=>{
    modal.style.display = "flex"
    event.stopPropagation() 
}

closeModalBtn.onclick= ()=>{
    modal.style.display = "none"
}

modal.onclick = (event)=>{
    modal.style.display = "none"
    event.stopPropagation()
}

modalContent.onclick = (event)=>{
    event.stopPropagation()
}