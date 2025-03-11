import express, { Request, Response } from 'express';
import { pool } from '../../config/connections';

const router = express.Router();

// GET /api/applications - Retrieve all job applications
router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM applications ORDER BY applied_date DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ error: 'Error fetching applications' });
  }
});

// POST /api/applications - Add a new job application
router.post('/', async (req: Request, res: Response) => {
  try {
    const { company, position, status, applied_date } = req.body;
    const result = await pool.query(
      'INSERT INTO applications (company, position, status, applied_date) VALUES ($1, $2, $3, $4) RETURNING *',
      [company, position, status, applied_date]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding application:', error);
    res.status(500).json({ error: 'Error adding application' });
  }
});

export default router;