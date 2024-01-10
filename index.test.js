const fetch = require('node-fetch');

it('should return OK', async () => {
    const response = await fetch('http://localhost:3000');
    const text = await response.text();
    expect(text).toBe('OK');
});