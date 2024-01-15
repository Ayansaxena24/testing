import React from "react";
import App from "./App";
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe("App", () => {
  it("starts with a count of 0", () => {
    const wrapper = shallow(<App />);
    const countState = wrapper.state().count;
    expect(countState).toEqual(0);
  });
  // it('increments count by 1 when the increment button is clicked', () => {
  //     const wrapper = shallow(<App />)
  //     const incrementBtn = wrapper.find('button.increment')
  //     incrementBtn.simulate('click')
  //     const text = wrapper.find('p').text()
  //     expect(text).toEqual('1')
  // })
  // it('decrements count by 1 when the decrement button is clicked', () => {
  //     const wrapper = shallow(<App />)
  //     const decrementBtn = wrapper.find('button.decrement')
  //     decrementBtn.simulate('click')
  //     const text = wrapper.find('p').text()
  //     expect(text).toEqual('-1')
  // })
});
