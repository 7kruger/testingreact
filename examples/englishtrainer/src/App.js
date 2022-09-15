import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/Main';
import './styles/App.css';

function App() {

  const [words, setWords] = useState([
    {id: 1, eng: "important", rus: "важный"},
    {id: 2, eng: "necessary", rus: "необходимый"},
    {id: 3, eng: "ancient", rus: "древний"},
  ]);

  function createWord(word) {
    word.id = Date.now();
    setWords([...words, word]);
  }

  function removeWord(word) {
    setWords(words.filter(w => w.id !== word.id));
  }

  return (
    <div className="App">
      <Header listwords={words} remove={removeWord} create={createWord}/>
    </div>
  );
}

export default App;
