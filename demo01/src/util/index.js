
/***
 * @param url string
 * 
 * @param method default：get
 * 
 * @param baseURL test https://www.baidu.com
 * `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
 // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
 * 
 * @param headers {'X-Requested-With': 'XMLHttpRequest'},
 * 
 * @param params  {ID: 12345},
 * 
 * @param data  {firstName: 'Fred'}, 
 *  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
 * 
 * 
 */
export default {
  _axios: function (obj) {
    var reg = /(PUT)|(POST)|(PATCH)/ig
    if (reg.test(obj.method)) {
      obj.data = obj.data
    } else {
      obj.params = obj.data
    }
    obj.method = obj.method || 'get'
    return new Promise((_res, rej) => {
      this.$axios(obj).then(res => {
        if (res.status == 200) {
          _res(res.data)
        } else {
          rej(res.data)
        }
      })

    }, (error) => {
      rej(error)
    })
  }
}