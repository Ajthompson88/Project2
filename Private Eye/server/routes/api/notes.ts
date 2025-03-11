import { Router, Request, Response } from 'express';
import { Note } from '../models/note';

const router = Router();

// Get notes for an application
router.get('/applications/:id', async (req: Request, res: Response) => {
    try {
        const notes = await Note.findAll({ where: { applicationId: req.params.id } });
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Create a new note
router.post('/applications/:id', async (req: Request, res: Response) => {
    try {
        const note = await Note.create({ ...req.body, applicationId: req.params.id });
        res.status(201).json(note);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

// Delete a note
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await Note.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            res.status(404).json({ error: 'Note not found' });
            return;
        }
        res.json({ message: 'Note deleted successfully' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

export default router;
