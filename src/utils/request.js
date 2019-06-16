import axios from "axios"
import {Message} from "element-ui"
// const service = axios.create({
//   baseURL: "http://m.maoyan.com/",
//   timeout: 5000,
//   // withCredentials: true, // send cookies when cross-domain requests
// })
// service.interceptors.request.use(
//   config => {
//     // config.headers['X-Token'] = getToken()
//     return config
// }, error => {
//     console.log(error)
//     return error
// })
//
// service.interceptors.response.use(response=>{
//   const res=responses.data;
//   console.log(res)
//   if(res.code==200){
//     return res
//   }else if(res.code==500){
// Message.error(res.data)
//   }
//
// },error => {
//   console.log(error)
// })

export default axios;
