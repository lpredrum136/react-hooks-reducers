import { v4 as uuidv4 } from 'uuid'

export const bookReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'ADD_BOOK':
      return [
        ...state,
        { title: payload.title, author: payload.author, id: uuidv4() }
      ]
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== payload.id)
    default:
      return state
  }
}
