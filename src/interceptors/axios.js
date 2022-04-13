import axios from 'axios'

axios.defaults.baseURL='https://operations.roushik.com/api/'

const createAxiosResponseInterceptor=()=> {
  const interceptor = axios.interceptors.response.use(
      response => response,
      async error => {
          // Reject promise if usual error
          if (error.response.status !== 401) {
              return Promise.reject(error);
          }
          
          /* 
           * When response code is 401, try to refresh the token.
           * Eject the interceptor so it doesn't loop in case
           * token refresh causes the 401 response
           */
          axios.interceptors.response.eject(interceptor);

          try {
          try {
            const response = await axios.post('/api/token/refresh/', {
              'refresh': localStorage.getItem('RefreshToken')
            });
            localStorage.setItem('token',response.access)
            error.response.config.headers['Authorization'] = 'Bearer ' + response.data.access_token;
            return await axios(error.response.config);
          } catch (error_1) {
            // destroyToken();
            this.router.push('/login');
            return await Promise.reject(error_1);
          }
        } finally { }
      }
  );
}
createAxiosResponseInterceptor()
















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
