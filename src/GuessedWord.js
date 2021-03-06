import React from 'react';
import PropTypes from 'prop-types';


const GuessedWord = (props) => {
    let contents;
    if(props.guessedWords.length === 0){
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        )
    } else {
        const guessedWordsRow = props.guessedWords.map((word, index)=>(
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        contents = (
            <div data-test="guessed-words">
                <h3>Guessed words</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Guess</th>
                            <th>Matching letters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guessedWordsRow}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <div data-test="guessedword-component">
            { contents }
        </div>
    )
} 

GuessedWord.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape(
            {
                guessedWord: PropTypes.string.isRequired,
                letterMatchCount: PropTypes.number.isRequired,
            }
        ).isRequired
    )
};

export default GuessedWord;