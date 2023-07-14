import api from './config.js'

export const getPictograms = async () => {
  const { data } = await api.get('/imagenes')
  return data
}