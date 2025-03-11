import express, { Request, Response } from 'express';
import { User } from '../models';
import { Interview } from '../models/interview';

const router = express.Router();

// Register User
router.post('/register', async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Get User by ID
router.get('/:id', async (req: Request, res: Response) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Update User
router.put('/:id', async (req: Request, res: Response) => {
    try {
        const [updated] = await User.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Delete User
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await User.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'User not found' });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Register Interview
router.post('/register', async (req: Request, res: Response) => {
    try {
        const interview = await Interview.create(req.body);
        res.status(201).json(interview);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Get Interview by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const interview = await Interview.findByPk(req.params.id);
        if (!interview) {
            res.status(404).json({ error: 'Interview not found' });
            return;
        }
        res.json(interview);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

// Update Interview
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await Interview.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            res.status(404).json({ error: 'Interview not found' });
            return;
        }
        res.json({ message: 'Interview updated successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

// Delete Interview
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await Interview.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            res.status(404).json({ error: 'Interview not found' });
            return;
        }
        res.json({ message: 'Interview deleted successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

export default router;
