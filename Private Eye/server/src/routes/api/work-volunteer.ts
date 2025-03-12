import express from 'express';
import type { Request, Response } from 'express';
import { Application, User } from '../../models/Application.js';

 const router = express.Router();

//  GET /works - Get all Works
router.get('/user', async (_req: Request, res: Response) => {
  try {
    const user = await User.findAll({
      include: [
        {
          model: Application,
          as: 'assignedApplication', // This should match the alias defined in the association
          attributes: ['applicationName'], //Include only the volunteerName attribute
        },
      ],
    });
    res.json(user);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET /works/:id - Get work by ID
router.get('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Application,
          as: 'assignedApplication', // This should match the alias defined in the association
          attributes: ['applicationName'], //Include only the volunteerName attribute
        },
      ],
    });
    if(user) {
      res.json(user);
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /works - Create new work
router.post('/user', async (req: Request, res: Response) => {
  const { name, status, description, company } = req.body;
  try {
    const newUser = await User.create({
      name, status, description, company
    });
    res.status(201).json(newUser);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /works/:id - Update work by ID
router.put('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, status, description, company } = req.body;
  try {
    const user = await User.findByPk(id);
    if(user) {
      user.name = name;
      user.status = status;
      user.description = description;
      user.company = company;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE /works/:id - Delete work by ID
router.delete('/user/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if(user) {
      await user.destroy();
      res.json({ message: 'User deleted' });
    } else {
      res.status(404).json({
        message: 'User not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

export { router as userRouter };
