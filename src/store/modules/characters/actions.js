import { SET_CHARACTERS } from '../../mutations-types'
import { API_URL } from '@/constants'

const actions = {
  getAllCharacters ({ commit }) {
    fetch(`${API_URL}/people`)
    .then(res => res.json())
    .then(res => res.results)
    .then(characters => {
      commit(SET_CHARACTERS, { characters })
    })
  }
}

export default actions
