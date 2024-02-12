import { prometheusRequestHandler } from "./instrumentation";

/*app.ts*/
import express, { Express } from 'express';

const port: number = 8080;
const app: Express = express();

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}

// register metrics handler
app.get('/metrics', prometheusRequestHandler)

app.get('/rolldice', (req, res) => {
    res.send(getRandomNumber(1, 6).toString());
});

app.listen(port, () => {
    console.log(`Listening for requests on http://localhost:${port}`);
});