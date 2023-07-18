import api from './config.js'

export const getSecuencia = async (id) => {
  const { data } = await api.get(`/secuencias/${id}/pictos`)
  return data
}

export const updateSecuencia = async (id, newSecuencia) => {
  const { data } = await api.put(`/secuencias/${id}/update`, {array: newSecuencia})
  console.log(data)
}