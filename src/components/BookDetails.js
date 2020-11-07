import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext)
  const { id, title, author } = book
  return (
    <li
      onClick={() => {
        dispatch({
          type: 'REMOVE_BOOK',
          payload: { id }
        })
      }}
    >
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  )
}

export default BookDetails
