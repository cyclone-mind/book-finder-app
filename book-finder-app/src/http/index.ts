import axios from 'axios'

// 创建 axios 实例
const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
})

// 添加请求拦截器，自动向每个请求添加 API 密钥
api.interceptors.request.use(config => {
  // 确保 params 对象存在
  config.params = config.params || {}
  
  // 从环境变量中获取 API 密钥
  const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
  
  // 如果有 API 密钥，添加到请求参数中
  if (apiKey) {
    config.params.key = apiKey
  }
  
  return config
})

export default api