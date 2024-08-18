const fetchData = require('./async.js');

test('its an async function', async () => {
    const result = await fetchData();
    expect(result).toBe('data from async function');
})