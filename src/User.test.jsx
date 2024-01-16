import React from "react";
import Enzyme, { shallow } from "enzyme";
import User from "./User";
import Adapter from "enzyme-adapter-react-16";
import fetchMock from "jest-fetch-mock";

Enzyme.configure({ adapter: new Adapter() });
fetchMock.enableMocks();

const nextTick = async () => {
    return new Promise(resolve => {
        setTimeout(resolve, 0);
    });
};

const dummyUser = {
    id: 1,
    name: 'Jack Franklin',
    website: 'https://javascriptplayground.com',
};

const url = 'https://jsonplaceholder.typicode.com/users/1';

describe('User', () => {

    it('Shows the loading text before the data is fetched', async () => {

        fetchMock.mockResponseOnce(JSON.stringify(dummyUser), {
            status: 200,
            body : dummyUser,
        });

        const wrapper = shallow(<User id={1} />);
        expect(wrapper.find('p').text()).toEqual('Loading...');

    })

    it('Shows the data once it has been fetched', async () => {

        fetchMock.mockResponseOnce(JSON.stringify(dummyUser), {
            status: 200,
            body : dummyUser,
        });

        const wrapper = shallow(<User id={1} />);

        await nextTick()
        wrapper.update()
        expect(wrapper.find('h1').text()).toEqual(dummyUser.name);
        expect(wrapper.find('p').text()).toEqual(dummyUser.website);

    });
});

// ---------------------------------------------------------------------


