import { corectGuess, actionTypes } from './';


// toBe is used for mutable primitve data types  e.g. number , string
//toEqual is used for reference data types / immutable data types eg. array , object

describe('Correct guess', () => {
    test('returns an action with type CORRECT_GUESS', () => {
        const action = corectGuess();
        expect(action).toEqual({ type: actionTypes.CORECT_GUESS })
    })
})