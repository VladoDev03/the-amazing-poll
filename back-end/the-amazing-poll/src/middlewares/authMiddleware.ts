import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWT_SECRET;

interface AuthRequest extends Request {
    user?: any;
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decodedToken = jwt.verify(token, jwtSecret!);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;
