// Callback
// const handler = ()=>{
//     alert("Han pasado 5 segundos")
// }

// setTimeout(handler,5000)


// function getData(onComplete /*Callback*/){
//     console.log("Fetching data...")
//     const data = ["Erwin","José","Matias","Leonel"]
//     setTimeout(()=>{
//         onComplete(data)
//     },10000)
// }

// getData((data)=>{
//     console.log(data)
// })

// console.log("Hola")

const characters = document.getElementById("characters")

const createCard = (character)=>{
    const article = document.createElement("article")
    const p = document.createElement("p")
    p.innerText = character.name
    const img = document.createElement("img")
    img.src = character.image
    article.appendChild(p) // al "article" agregale un child que es el "p"
    article.appendChild(img) // al "article" agregale un child que es el "img"
    characters.appendChild(article)
}


// Gestionando promesas
fetch("https://rickandmortyapi.com/api/character") // fetch -> ve y traéme algo
.then((response)=>{
    if(response.ok){
        return response.json() // Convierte el body de la respuesta en json. También devuelve una promesa
    }else{
        // console.error(data)
        throw Error("Ocurrió un error")
    }
})
.then((body)=>{
    console.log("Body",body)
    const characters = body.results

    characters.forEach(character => {
        createCard(character)
    });

})// Caso exitoso
.catch((error)=>{
    // URL o recurso no disponible, Error del servidor, Conversión incorrecta
    console.log("Error:",error.message)
})//caso fallido