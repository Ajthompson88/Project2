import { Request, Response } from 'express';
import { Company } from '../models';

// Get all companies
export const getAllCompanies = async (req: Request, res: Response): Promise<void> => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get company by ID
export const getCompanyById = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await Company.findByPk(req.params.id);
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create company
export const createCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update company
export const updateCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await Company.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete company
export const deleteCompany = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await Company.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};