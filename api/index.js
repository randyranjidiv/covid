import axios from 'axios';

const url= 'https://covid19.mathdro.id/api';

export const fetchData1=async()=>{
  try{
const response =await axios.get(url)
console.log(response+'get');
return response
  }
  catch(error){

  }

}