export const actionTypes = {
    CORECT_GUESS: 'CORECT_GUESS'
}
/**
 * @function corectGuess
 * @returns { object } 
 */
export function corectGuess() {
    return { type: actionTypes.CORECT_GUESS };
}