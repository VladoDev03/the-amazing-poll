import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

const port = 8080;

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('', (req: Request, res: Response) => {
    res.send("The Amazing Poll");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
