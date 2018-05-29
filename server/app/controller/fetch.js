import axios from 'axios';

const localFetch = (options) => {
  let {
    method = 'get',
    data,
    url,
  } = options

  let cloneData = _.cloneDeep(data)

  cloneData = _.assign({}, cloneData, { token: localStorage.getItem('token') || '' })
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
      })
    case 'delete':
      return axios.delete(url, {
        params: cloneData,
      })
    case 'post':
      return axios.post(url, cloneData)
    case 'put':
      return axios.put(url, cloneData)
    case 'patch':
      return axios.patch(url, cloneData)
    default:
      return axios(options)
  }
}
 // {
 //     // headers: {'x-access-token': localStorage.getItem('token')},
 //   }
 function fetch(options, cb) {
 	const opt = Object.assign(options)
 	// const opt = Object.assign(options, {
  //    headers: { 'x-access-token': localStorage.getItem('token') },
  //  })

   return localFetch(opt).then((response) => {
   	 const data = response.data;
	 if (response.status >= 200 && response.status < 300) {
	  	if(!data.status) {
	  		cb(null)
	  	}else {
	  		cb(data);
	  	}
	 }
   })
   .catch((error) => {
    const { response } = error
    let msg
    let statusCode
    if (response && response instanceof Object) {
      const { data, statusText } = response
      statusCode = response.status
      msg = data.message || statusText
    } else {
      statusCode = 600
      msg = error.message || '网络错误'
    }
    cb(null)
    // return { success: false, statusCode, message: msg }
  });
 }

 module.exports = fetch
