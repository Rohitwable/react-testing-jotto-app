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
    const wrapper = shallow(<Input store={store} />).dive();  // dive give us child of parent component
    console.log(wrapper.debug());
}

setupComponent();

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

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