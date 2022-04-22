import axios from 'axios'

axios.defaults.baseURL=' https://api.finfort.xyz/'



// let refresh=false;

// axios.interceptors.response.use(res=>res, async error=>{
//   if(error.response.status===401 && !refresh){
//     refresh=true;
//     const response= await axios.post('refresh/',{},{withCredentials:true})
//     if(response.status===200){
//       axios.defaults.headers.common['Autherization']=`Bearer ${response.data['token']}`

//       return axios(error.config)
//     }
//   }
//   refresh=false;
//   return error
// })
