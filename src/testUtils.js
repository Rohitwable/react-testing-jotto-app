import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/reducers';
import { createStore } from 'redux';

/***
 * @function storeFactory
 * @param { object } initialState
 * @returns { Store } 
 */
export const storeFactory = (initialState) => {
    return createStore(rootReducer, initialState);
}

/**
 * @function findByTestAttr
 * @param {shalloWrapper } wrapper 
 * @param { string } value 
 * @returns { shalloWrapper }
 */

export const findByTestAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}