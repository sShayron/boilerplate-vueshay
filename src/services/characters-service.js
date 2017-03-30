import axios from 'axios'
import { API_URL } from '@/constants'

const getAllCharacters = () => {
  return axios.get(`${API_URL}/people`)
    .then(res => res.data.results)
}

export default getAllCharacters
