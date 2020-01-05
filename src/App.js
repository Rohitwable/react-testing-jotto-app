import React from 'react';
import './App.css';
import GuessedWord from './GuessedWord';
import Congrats from './Congrats';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Jotto App!</h1>
        <Congrats success={false} />
        <GuessedWord guessedWords={[]} />
      </div>
    );
  }
}

export default App;
