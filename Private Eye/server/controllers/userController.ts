import { Request, Response } from 'express';
import { User } from '../models';

// Register User
export const registerUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get User by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const [updated] = await User.update(req.body, { where: { id: req.params.id } });
        if (!updated) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User updated successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleted = await User.destroy({ where: { id: req.params.id } });
        if (!deleted) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};