import React, { useContext, useState } from 'react'
import { BookContext } from '../contexts/BookContext'

const BookForm = () => {
  const { dispatch } = useContext(BookContext)

  const [book, setBook] = useState({
    title: '',
    author: ''
  })

  const { title, author } = book

  const enterNewBook = event => {
    setBook({ ...book, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    dispatch({ type: 'ADD_BOOK', payload: book })
    setBook({ title: '', author: '' })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Book title"
        value={title}
        onChange={enterNewBook}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Book author"
        value={author}
        onChange={enterNewBook}
        required
      />
      <input type="submit" value="Add this book" />
    </form>
  )
}

export default BookForm
