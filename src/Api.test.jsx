require('jest-fetch-mock').enableMocks()
import fetchMock from "jest-fetch-mock";
import { fetchUser } from "./Api";

// adds the 'fetchMock' global variable and rewires 'fetch' global to call 'fetchMock' instead of the real implementation
require('jest-fetch-mock').enableMocks()
// changes default behavior of fetchMock to use the real 'fetch' implementation and not mock responses
fetchMock.dontMock() 

const dummyUser = {
    id: 1,
    name: 'Jack Franklin',
    website: 'https://javascriptplayground.com',
};

// const testing = JSON.stringify(dummyUser)

describe('fetchUser', () => {
    it('fetches the user', async () => {
        const url = 'https://jsonplaceholder.typicode.com/users/1'

        // fetchMock.mockResponseOnce(url, {
        //     status: 200,
        //     body : dummyUser,
        // })

        // const response = await fetchUser(1)
        // expect(response).toEqual(dummyUser)

        fetchMock.mockOnce(JSON.stringify(dummyUser));

        await expect(fetchUser(1)).resolves.toEqual(dummyUser)
        // const response = await fetchUser(1)
        // expect(response).toEqual(dummyUser)

    })
})