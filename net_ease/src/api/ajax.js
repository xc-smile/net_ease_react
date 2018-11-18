import axios from "axios"

export default function ajax(url = "", data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    let promise
    if(type === "GET"){
      let queryStr = "";
      Object.keys(data).forEach(key => {
        let value = data[key];
        queryStr = key + "=" + value + "&"
      })
      if(queryStr !== "") {
        queryStr = queryStr.substring(0,queryStr.length - 1)
        url = url + "?" + queryStr;
      }
      promise = axios.get(url);
    }else{
      promise = axios.post(url,data)
    }
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}
