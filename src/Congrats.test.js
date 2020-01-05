import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from './testUtils';

Enzyme.configure({ adapter: new Adapter() });

/**
 * @function setupComponent
 * @param {object} props 
 * @param {object} state 
 * @returns { ShallowWrapper }
 */
const setupComponent = (props = {}, state = null) => {
    return shallow(<Congrats {...props} />);
}

it('renders without any error', () => {
    const wrapper = setupComponent({ success: false });
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
