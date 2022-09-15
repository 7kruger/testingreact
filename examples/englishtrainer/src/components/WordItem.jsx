import React, { useEffect } from 'react'

function WordItem({ word, remove }) {

    function removeWord() {
        remove(word);
    }

    return (
        <div className='word-item'>
            <p>English: {word.eng}</p>
            <p>На русском: {word.rus}</p>
            <button onClick={() => removeWord()}>Удалить</button>
        </div>
    )
}

export default WordItem