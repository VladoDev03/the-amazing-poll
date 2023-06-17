import express, {Express, Request, Response} from "express";
import bodyParser from "body-parser";

const port = 8080;

const app: Express = express();

app.use(bodyParser.json()); // application/json

app.get('', (req: Request, res: Response) => {
    res.send("The Amazing Poll");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
