import api from './config.js'

export const getSecuencia = async (id) => {
  const { data } = await api.get(`/secuencias/${id}`)
  return data
}
