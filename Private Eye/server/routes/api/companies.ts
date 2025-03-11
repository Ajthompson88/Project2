import { Router, Request, Response } from 'express';
import { Company } from '../models/company';

const router = Router();

// Get all companies
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
        res.status(500).json({ error: error.message });
    }
});

// Get company by ID
router.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            res.status(404).json({ error: 'Company not found' });
            return;
        }
        res.json(company);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});

// Create company
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Update company
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await Company.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

// Delete company
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await Company.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
