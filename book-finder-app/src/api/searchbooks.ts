import api from '../http'

export const searchBooks = async (query: string) => {
  const response = await api.get(`/volumes?q=${query}`)
  return response.data
}

export const getBookDetails = async (id: string) => {
  const response = await api.get(`/volumes/${id}`)
  return response.data
}



