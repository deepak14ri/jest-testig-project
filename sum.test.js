const sum = require('./sum.js');

/*
test('desc here', () => {
    expect(fn).toBe(res);
});

*/

test('adds a and b equal 6', () => {
    expect(sum(2, 4)).toBe(6);
});

test('adds a and b equal -1', () => {
    expect(sum(2, -3)).toBe(-1);
});

test('adds a and b equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});
