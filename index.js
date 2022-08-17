console.log("Hola mundo")

const h1Bienvenida = document.getElementById("bienvenida")
const listElements = document.getElementsByClassName("list-element") //HTMLCollection
const element = document.querySelector("#parrafo") // Obtiene solo un elemento
const nodeList = document.querySelectorAll(".list-element") // Obtiene varios elementos

// for (let i = 0; i < listElements.length; i++) {
//     listElements[i].onclick = function(){
//         alert("Click")
//     }
// }

nodeList.forEach(function(element){
    element.onclick = function(){
        alert("Click")
    }
})

nodeList.forEach((element)=>{
    element.onclick = ()=>{
        alert("Click")
    }
})



console.log(h1Bienvenida)
console.log(listElements)
console.log(element)
console.log(nodeList)

// Reto: 5 eventos comúnes de JS