import React from 'react';

/**
 * @function 
 * @param { object } props
 * @returns { JSX Element}
 */
export default (props) => {
    if (props.success) {
        return (
            <div data-test="congrats-component">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word
             </span>
            </div>
        );
    } else {
        return (
            <div data-test="congrats-component" />
        )
    }
}