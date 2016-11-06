import { INCREASE, DECREASE } from '../actions/actionTypes'

const initialState = {
  number: 1
}

export default function update(state = initialState, action) {
  const newState = Object.assign({}, state)

  switch(action.type) {
    case INCREASE:
      return Object.assign(newState, {
        number: state.number + action.amount
      })
    case DECREASE:
      return Object.assign(newState, {
        number: state.number - action.amount
      })
    default:
      return newState
  }
}
