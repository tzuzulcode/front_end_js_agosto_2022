axios.get("https://rickandmortyapi.com/api/character")
.then((response)=>{
    console.log(response.data)
})
.catch((error)=>{
    console.log(error)
})

async function getData(){
    try {
        const response = await axios.get("https://rickandmortyapi.com/api/character")

        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
}
getData()
