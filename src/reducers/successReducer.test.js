import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('return default initial state of false when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of true when an action is passed of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORECT_GUESS });
    expect(newState).toBe(true);
})