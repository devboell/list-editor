import faker from 'faker'
import shortid from 'shortid'
import { times } from 'lodash/fp'

faker.seed(100)

const itemGenerator = () => ({
  id: shortid.generate(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
})

const initialState = {
  items: times(itemGenerator)(10),
  selectedId: 'no_selection',
  createMode: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map(item =>
          ((item.id === action.item.id) ? action.item : item)),
      }

    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] }

    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => action.id !== item.id) }

    case 'SET_SELECTED_ID':
      return { ...state, selectedId: action.id }

    case 'SET_CREATE_MODE':
      return { ...state, createMode: action.flag }
    default:
      return state
  }
}
