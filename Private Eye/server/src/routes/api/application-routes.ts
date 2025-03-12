import express from 'express';
import type { Request, Response } from 'express';
import { Application } from '../../models/User.js';

const router = express.Router();

// GET /volunteers - Get all volunteers
router.get('/application', async (_req: Request, res: Response) => {
  try {
    const application = await Application.findAll();
    res.json(application);
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// GET /volunteers/:id - Get a volunteer by ID
router.get('/application/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const application = await Application.findByPk(id);
    if(application) {
      res.json(application);
    } else {
      res.status(404).json({
        message: 'Application not found'
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: error.message
    });
  }
});

// POST /volunteers - Create a new volunteer
router.post('/application', async (req: Request, res: Response) => {
  const { applicationName } = req.body;
  try {
    const newApplication = await Application.create({
      applicationName
    });
    res.status(201).json(newApplication);
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// PUT /volunteers/:id - Update a volunteer by ID
router.put('/application/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const { applicationName } = req.body;
  try {
    const application = await Application.findByPk(id);
    if(application) {
      application.applicationName = applicationName;
      await application.save();
      res.json(application);
    } else {
      res.status(404).json({
        message: 'Application not found'
      });
    }
  } catch (error: any) {
    res.status(400).json({
      message: error.message
    });
  }
});

// DELETE /volunteers/:id - Delete a volunteer by ID
router.delete('/application/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const application = await Application.findByPk(id);
    if(application) {
      await application.destroy();
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

export { router as applicationRouter };
