console.log("Hola mundo")

const h1Bienvenida = document.getElementById("bienvenida")
const listElements = document.getElementsByClassName("list-element") //HTMLCollection
const element = document.querySelector("#parrafo") // Obtiene solo un elemento
const nodeList = document.querySelectorAll(".list-element") // Obtiene varios elementos
const list = document.getElementById("list")
const noBubble = document.querySelector(".no-bubble")

noBubble.onclick=(event)=>{
    event.stopPropagation()
}


// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].onclick = function(){
//         alert("Click")
//     }
// }

// nodeList.forEach(function(element){
//     element.onclick = function(){
//         alert("Click")
//     }
// })

// nodeList.forEach((element)=>{
//     element.onclick = (event)=>{
//         console.log(event)
//         alert("Click")
//     }
// })



console.log(h1Bienvenida)
console.log(listElements)
console.log(element)
console.log(nodeList)

list.onclick = (event)=>{
    alert("Click: "+event.target.innerText)
}

// Reto: 5 eventos comúnes de JS en el navegador
//blur
//change
//input
//focus
//keyPressed
//mouseMove
//load
//mouseOver
//onDrag
//onDrop
//submit
//resize