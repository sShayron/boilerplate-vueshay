import { SET_CHARACTERS } from '../../mutations-types'
import initialState from './state'

const mutations = {
  [SET_CHARACTERS] (state = initialState, { characters }) {
    state.characters = characters
  }
}

export default mutations
