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


fetch("https://rickandmortyapi.com/api/character") // fetch -> ve y traéme algo
.then((response)=>{
    console.log(response)
})

// Stream ...