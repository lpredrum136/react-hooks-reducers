import React, { createContext, useReducer, useEffect } from 'react'
import { bookReducer } from '../reducers/BookReducer'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
  const localData = localStorage.getItem('books')
  const initState = localData ? JSON.parse(localData) : []

  const [books, dispatch] = useReducer(bookReducer, initState)

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])

  const bookReducerData = { books, dispatch }

  return (
    <BookContext.Provider value={bookReducerData}>
      {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
