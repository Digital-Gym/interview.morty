import axios from "axios"


const url = "https://rickandmortyapi.com/api"

export async function getCharacters(){
    try{
        let res = await axios.get(`${url}/character`)
        console.log(res)
        if(res){
            return res.data
        }
    }
    catch(err){
        console.error(err)
    }
}