import axios from "axios"


const url = "https://rickandmortyapi.com/api"

export async function getCharacters(page){
    try{
        console.log(page)
        let res = await axios.get(`${url}/character/?page=${page}`)
        console.log(res)
        if(res){
            return res.data
        }
    }
    catch(err){
        console.error(err)
    }
}