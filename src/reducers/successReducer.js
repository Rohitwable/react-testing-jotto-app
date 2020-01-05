import { actionTypes } from "../actions";

/**
 * @function successReducer
 * @param {array} state - array of guessed words
 * @param {object} action
 * @returns {boolean} new success state
 */
export default (state = false, action) => {
    switch (action.type) {
        case (actionTypes.CORECT_GUESS):
            return true;
        default:
            return state;
    }
}