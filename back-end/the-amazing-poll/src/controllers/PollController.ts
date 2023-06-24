import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Poll from '../models/Poll';

// TODO: use async await
const getPoll = (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    return Poll
        .findById(id)
        .then(poll => res.status(200).json({ poll }))
        .catch(error => res.status(500).json({ error }));
}

// TODO: use async await
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

export default { getPoll, createPoll };
