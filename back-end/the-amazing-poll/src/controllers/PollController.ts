import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Poll from '../models/Poll';

const createPoll = (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const choices = req.body.choices;

    const poll = new Poll({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        choices: choices
    });

    return poll
        .save()
        .then(poll => res.status(201).json({ poll }))
        .catch(error => res.status(500).json({ error }));
}

export default { createPoll };
