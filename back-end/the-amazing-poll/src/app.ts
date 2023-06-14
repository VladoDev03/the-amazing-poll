import express, {Express, Request, Response} from "express";

const port = 8080;

const app: Express = express();

app.get('', (req: Request, res: Response) => {
    res.send("The Amazing Poll");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
