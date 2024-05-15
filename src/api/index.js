import axios from "axios"


const url = "https://rickandmortyapi.com/api"

export async function getCharacters(page, name, status){
    try{
        let res = await axios.get(`${url}/character/?page=${page}&name=${name}&status=${status}`)
        console.log(res)
        if(res){
            return res.data
        }
    }
    catch(err){
        console.error(err)
    }
}