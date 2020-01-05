import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { checkProps, findByTestAttr } from './testUtils';
import GuessedWord from './GuessedWord';

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
}

/**
 * @function setupComponent
 * @param {object} props 
 * @param {object} state 
 * @returns { ShallowWrapper }
 */
const setupComponent = (props = {}, state = null) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWord {...setupProps} />);
}

it('does not throw warning for exected props', () => {
    checkProps(GuessedWord, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setupComponent({ guessedWords: [] });
    })
    it('renders without error', () => {
        const component = findByTestAttr(wrapper, 'guessedword-component');
        expect(component.length).toBe(1);
    })
    it('renders instructions to guess the word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('if there are words guessed', () => {
    let wrapper;
     const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];
    beforeEach(() => {
        wrapper = setupComponent({ guessedWords })
    });
    it('renders without any error', () => {
        const component = findByTestAttr(wrapper, 'guessedword-component');
        expect(component.length).toBe(1);
    });
    it('renders guessed word section', () => {
        const guessedwordSection = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedwordSection.length).toBe(1); 
    });
    it('renders correct number of guessed words', () => {
        const guessedwordSection = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedwordSection.length).toBe(guessedWords.length);
    })
});