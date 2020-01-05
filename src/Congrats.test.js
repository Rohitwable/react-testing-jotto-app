import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from './testUtils';


/**
 * @function setupComponent
 * @param {object} props 
 * @param {object} state 
 * @returns { ShallowWrapper }
 */

 //setup the default props

 const defaultProps = { success: false };
const setupComponent = (props = {}, state = null) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<Congrats {...setupProps} />);
}

it('renders without any error', () => {
    const wrapper = setupComponent();
    const component = findByTestAttr(wrapper, 'congrats-component');
    expect(component.length).toBe(1);
});

it('renders no text when success prop is false', () => {
    const wrapper = setupComponent({ success: false });
    const component = findByTestAttr(wrapper, 'congrats-component');
    expect(component.text()).toBe('');
});

it('renders non empty congratulation message when success prop is true', () => {
    const wrapper = setupComponent({ success: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});

it('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps)

})
