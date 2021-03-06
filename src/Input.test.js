import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr, storeFactory } from './testUtils';
import Input from './Input';

/**
 * @function setupComponent
 * @param {object} initialState 
 * @returns { ShallowWrapper }
 */
const setupComponent = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive();
    return wrapper;  // dive give us child of parent component
}


describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(()=> {
            const initialState = { success: false };
            wrapper = setupComponent(initialState);
        })
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'input-component');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);

        });
        test('renders submit button', () => {
            const submitBtn = findByTestAttr(wrapper, 'submit-button');
            expect(submitBtn.length).toBe(1);
        });
    });

    describe('word has been guessed', () => {
        test('renders component without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });
    })
});

describe('update state', () => {

});