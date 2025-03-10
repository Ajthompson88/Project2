import express, { Request, Response } from 'express';
import { Note } from '../models';

const router = express.Router();

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
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await Note.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ error: 'Note not found' });
        res.json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
