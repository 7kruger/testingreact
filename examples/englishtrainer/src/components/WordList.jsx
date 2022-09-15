import React, { useEffect } from 'react'
import WordItem from './WordItem';

function WordList({ words, remove }) {

  return (
    <div>
        <h2>Слова</h2>
        {words.map(word =>
            <WordItem key={word.id} word={word} remove={remove} />
        )}
    </div>
  )
}

export default WordList;