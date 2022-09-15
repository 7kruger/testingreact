import React, { useState, useRef } from 'react'

function WordForm({ create }) {

    const [word, setWord] = useState({eng: "", rus: ""});

    function createWord(e) {
        e.preventDefault();
        if(word.eng != "" && word.rus != "") {
            create(word);
            setWord({eng: "", rus: ""});
        }
    }

    return (
        <form>
            <input 
                value={word.eng}
                onChange={event => setWord({...word, eng: event.target.value})}
                placeholder="На английском" 
            />
            <input 
                value={word.rus}
                onChange={event => setWord({...word, rus: event.target.value})}
                placeholder="Перевод на русском"
            />
            <button onClick={createWord}>Добавить</button>
        </form>
    )
}

export default WordForm