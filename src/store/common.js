import axios from "../utils/request"
export default {
  namespaced:true,
  state:{

  },
  actions:{
    getDataState({state},obj){
      let data={}
      if(obj.data)data=obj.data;
    axios.get(obj.url,{
      params:data
    }).then(res=>{
      console.log(res);
    }).catch(error=>{
      console.log(error);
    })
    }
  }
}
