import express, { Express } from 'express';

const port: number = 8080;
const app: Express = express();

app.get('/example', (req, res) => {
    res.send('hello');
});

app.listen(port, () => {
    console.log(`Listening for requests on http://localhost:${port}`);
});