import express  from 'express';
import fetch from 'node-fetch';
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await fetch('https://www.google.com');
        if (response.ok) {
            res.send('Ok');
        } else {
            res.send('Not OK');
        }
    } catch (error) {
        res.send('Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
