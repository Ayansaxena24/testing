globalThis.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
    }

    import 'whatwg-fetch'
    import fetchMock from 'fetch-mock'
    afterEach(fetchMock.restore)