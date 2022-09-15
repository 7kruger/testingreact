import React, { useEffect } from 'react'
import WordForm from './WordForm'
import WordList from './WordList'

function Words({ words, create, remove }) {

  return (
    <div>
        <WordForm create={create} />
        <WordList words={words} remove={remove} />
    </div>
  )
}

export default Words