const app = document.getElementById("app")
let draggingElement
let targetElement
let characters
// let draggingIndex

const addEvents = (article)=>{
    article.ondrag=()=>{
        draggingElement = article
        // draggingIndex = index
    }

    article.ondragover = (event)=>{
        event.preventDefault()
        targetElement = event.target
    }

    article.ondrop = ()=>{
        let draggingIndex = parseInt(draggingElement.dataset.index)
        let targetIndex = parseInt(targetElement.dataset.index)

        console.log(draggingIndex)
        console.log(targetIndex)

        // const array = []

        let beginningToDragging = characters.slice(0,draggingIndex)
        let draggingToTarget = characters.slice(draggingIndex+1,targetIndex)
        let targetToEnd = characters.slice(targetIndex)

        draggingToTarget.push(characters[draggingIndex])
        console.log(beginningToDragging)
        console.log(draggingToTarget)
        console.log(targetToEnd)
        // let left = array.slice()

        const reordered = beginningToDragging.concat(draggingToTarget).concat(targetToEnd)
        
        app.innerHTML = ""
        reordered.forEach((character,index) => {
            createCard(character,index)
        });
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