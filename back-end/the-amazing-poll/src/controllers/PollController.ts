import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import Poll from '../models/Poll';

const getPoll = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    try {
        const poll = await Poll.findById(id);
        res.status(200).json(poll)
    } catch (error) {
        res.status(500).json({ error })
    }
}

const createPoll = async (req: Request, res: Response, next: NextFunction) => {
    const title = req.body.title;
    const choices = req.body.choices;

    const poll = new Poll({
        _id: new mongoose.Types.ObjectId(),
        title: title,
        choices: choices
    });

    try {
        const savedPoll = await poll.save();
        res.status(201).json({ poll: savedPoll });
    } catch (error) {
        res.status(500).json({ error });
    }
}

const deletePoll = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    try {
        const poll = await Poll.findByIdAndDelete(id);
        res.status(200).json({ poll })
    } catch (error) {
        res.status(500).json({ error })
    }
}

export default { getPoll, createPoll, deletePoll };
