import React, { useEffect, useState } from 'react'

function Main({ listwords }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [isPushed, setIsPushed] = useState(false);
    const [words, setWords] = useState(listwords);
    const [word, setWord] = useState();

    useEffect(() => {
        setIsLoaded(true);
        loadNewWord();
    }, []);

    function loadNewWord() {
        setWord(words[getRandomInt(words.length - 1)]);
        setIsPushed(false);
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    return (
        <div className='Main'>
            {!isLoaded
                ? <h2>Загрузка...</h2>
                :<div>
                    {!isPushed
                    ? 
                        <div>
                            <h2>{word.eng}</h2>
                            <button onClick={() => setIsPushed(true)}>Перевод</button>
                        </div>
                    : 
                        <div>
                            <h2>{word.eng}</h2>
                            <h2>{word.rus}</h2>
                            <div>
                                <button onClick={() => loadNewWord()}>Дальше</button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default Main;