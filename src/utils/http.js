import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

// const host = 'http://42.51.39.16:8080';
const host = 'http://test5.heroinhere.com'
// const host = '';

axios.defaults.withCredentials = false
//请求拦截器
axios.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if (config.headers.PostType === 'form') {
      config.data = qs.stringify(config.data)
    }
    console.log(config)
    return config
  },
  function(error) {
    // 对请求错误做些什么
    console.log(error)
    return Promise.reject(error)
  }
)

//响应拦截器
axios.interceptors.response.use(
  function(config) {
    // 对响应数据做点什么
    // let allCookies = document.cookie;
    console.log(config)
    // window.localStorage.setItem('cookie', allCookies)
    return config.data
  },
  function(error) {
    // 对响应错误做点什么
    console.log(error)
    return Promise.reject(error)
  }
)

async function get(url, params, header) {
  console.log('url, params, header', url, params, header)
  if (!header) {
    header = {
      'Content-Type': 'application/json',
    }
  }
  return await axios
    .get(host + url, {
      // 还可以直接把参数拼接在url后边
      params: params,
      headers: header,
    })
    .catch(function(error) {
      throw error
    })
}

async function post(url, params, header) {
  if (!header) {
    header = {
      'Content-Type': 'application/json',
    }
  } else if (header['Content-Type'] === 'form') {
    header['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    header['PostType'] = 'form'
  }

  return await axios
    .post(host + url, params, {
      headers: header,
    })
    .catch(function(error) {
      throw error
    })
}

function getHost() {
  return host
}

export default {
  init() {
    console.log('*** http installed ***')
    Vue.prototype.$http = {
      getHost,
      get,
      post,
    }
  },
  getHost,
  get,
  post,
}
