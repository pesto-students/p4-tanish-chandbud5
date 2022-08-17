const operations = require('./operations')
// testcase to check sum equal to
test('Sum equal to', () => {
    expect(operations.sum(12, 5)).toBe(17);
});
// testcase to check difference equal to
test('Difference equal to', () => {
    expect(operations.diff(12, 5)).toBe(7);
});
// testcase to check product equal to
test('Product equal to', () => {
    expect(operations.product(12, 5)).toBe(60);
});

// testcase to check sum not equal to
test('Sum not equal to', () => {
    expect(operations.sum(2, 5)).not.toBe(17);
});
// testcase to check difference not equal to
test('Difference not equal to', () => {
    expect(operations.diff(4, 5)).not.toBe(7);
});
// testcase to check product not equal to
test('Product not equal to', () => {
    expect(operations.product(2, 5)).not.toBe(60);
});