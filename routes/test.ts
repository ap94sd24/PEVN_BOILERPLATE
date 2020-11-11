import express from 'express';
const router = express.Router();
import pool from '../db';

/**
 * POST  api//test 
 */
router.post('/', async (req, res) => {
  try {
    const { description } = req.body;

    const newTask = await pool.query('INSERT INTO tasks (description) VALUES ($1) RETURNING *', [description]);

    res.json(newTask.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error!');
  }
});

export default router;