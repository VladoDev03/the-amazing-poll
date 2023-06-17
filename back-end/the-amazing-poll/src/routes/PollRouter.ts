import express from 'express';
import controller from '../controllers/PollController';

const router = express.Router();

router.post('/create', controller.createPoll);

export default router;
