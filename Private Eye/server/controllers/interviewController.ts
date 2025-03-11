import { Request, Response } from 'express';
import { Interview } from '../models/interview';

// Get all interviews
export const getAllInterviews = async (req: Request, res: Response): Promise<void> => {
    try {
        const interviews = await Interview.findAll();
        res.json(interviews);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get Interview by ID
export const getInterviewById = async (req: Request, res: Response): Promise<void> => {
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
};

// Create interview
export const createInterview = async (req: Request, res: Response): Promise<void> => {
    try {
        const interview = await Interview.create(req.body);
        res.status(201).json(interview);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update interview
export const updateInterview = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await Interview.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Interview not found' });
        }
        res.json({ message: 'Interview updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete interview
export const deleteInterview = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await Interview.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Interview not found' });
        }
        res.json({ message: 'Interview deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};