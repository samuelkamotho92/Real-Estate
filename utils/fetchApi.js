import axios from "axios";
export const baseUrl = 'https://bayut.p.rapidapi.com'
export const fetchApi = async (url)=>{
const {data} = await axios.get((url),{
    headers: {
    'X-RapidAPI-Key': '1ac48a18b0msha599dd2b54ef980p1a5c83jsnc788643f044a',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
})
return data
}