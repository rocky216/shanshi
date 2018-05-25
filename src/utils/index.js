import axios from "./http"
import qs from "qs"
import {Toast} from "mint-ui"

export function timeStamp(num){
  var date = new Date(num),
  Y = date.getFullYear() + '-',
  M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-',
  D = date.getDate() + ' ',
  h = date.getHours() + ':',
  m = date.getMinutes() + ':',
  s = date.getSeconds();
  return Y+M+D+h+m+s
}

export function fetch(opt, cb){

  var setting = {
    url: opt.url,
    method: (opt.method?opt.method:'get').toLowerCase()
  }

  function prefix(method){
    return axios({
      url: setting.url,
      method: setting.method,
      [setting.method == 'GET'?'params':'data']: qs.stringify(opt.data) ,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
  }

  prefix(setting.method).then((response)=>{
    if (response.data.status) {
      cb(response.data.res)
    }else {
      Toast(response.data.message);
    }
  }).catch((err)=>{
    console.log('%c','color:red', err);
  })

}
