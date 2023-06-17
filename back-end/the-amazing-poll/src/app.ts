import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authMiddleware from './middlewares/authMiddleware';
import pollRoutes from './routes/PollRouter';

dotenv.config();

const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

const app: Express = express();

app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/polls', pollRoutes);

mongoose.connect(connectionString!)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.get('/', (req: Request, res: Response) => {
    res.send('The Amazing Poll');
});

app.get('/auth', authMiddleware, (req: Request, res: Response) => {
    res.send('The Amazing Poll');
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
