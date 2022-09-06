const app = document.getElementById("app")
let draggingElement
let targetElement
let characters
// let draggingIndex

const reOrderArray = (index1,index2) =>{
    if(Math.abs(index1-index2)===1){
        const character1 = characters[index1]
        const character2 = characters[index2]
        
        // Intercambio de información
        characters[index1] = character2
        characters[index2] = character1

        // Otra forma:
        // const [character2,character1] = [characters[index1],characters[index2]]

        // characters[index1] = character2
        // characters[index2] = character1

        return [...characters]
    }else if(index1>index2){
        // Moviento hacia adelante
        const leftSide = characters.slice(0,index2)
        const centralSide = characters.slice(index2,index1)
        const rightSide = characters.slice(index1+1)

        const reordered = [...leftSide,characters[index1],...centralSide,...rightSide]

        return reordered
    }else if(index2>index1){
        // Movimiento hacia atrás
        const leftSide = characters.slice(0,index1)
        const centralSide = characters.slice(index1+1,index2+1)
        const rightSide = characters.slice(index2+1)

        const reordered = [...leftSide,...centralSide,characters[index1],...rightSide]

        console.log(reordered)

        return reordered
    }else{
        return characters
    }
}

const addEvents = (article)=>{
    article.ondrag =()=>{
        draggingElement = article
        if(draggingElement.parentNode===app){
            app.removeChild(draggingElement)
        }
        // draggingIndex = index
    }

    article.ondragover = (event)=>{
        event.preventDefault()
        targetElement = article
        // targetElement.after(draggingElement)
        // Reto: Corregir el comportamiento cuando se usa -> targetElement.before(draggingElement)
    }

    article.ondrop = ()=>{
        let draggingIndex = parseInt(draggingElement.dataset.index)
        let targetIndex = parseInt(targetElement.dataset.index)

        let reordered = reOrderArray(draggingIndex,targetIndex)

        if(reordered!==characters){
            characters = reordered
            app.innerHTML = ""
            characters.forEach((character,index) => {
                createCard(character,index)
            });
            console.log("Rendered")
        }else{
            console.log("Not rendered")
        }
    }
}


const createCard = (character, index)=>{
    const article = document.createElement("article")
    article.draggable = true
    article.dataset.index = index

    addEvents(article)

    const p = document.createElement("p")
    p.innerText = character.name
    const img = document.createElement("img")
    img.src = character.img_url
    article.appendChild(p) // al "article" agregale un child que es el "p"
    article.appendChild(img) // al "article" agregale un child que es el "img"
    app.appendChild(article)
}

axios.get("https://finalspaceapi.com/api/v0/character")
.then((response)=>{
    characters = response.data

    characters.forEach((character,index) => {
        createCard(character,index)
    });
})
.catch((error)=>{
    console.log(error)
})