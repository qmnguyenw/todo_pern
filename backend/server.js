const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// get all todo
app.get('/todos', async (req, res) => {
  try {
    const listTodo = await pool.query('SELECT * FROM todo');
    res.json(listTodo.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo(description) VALUES ($1) RETURNING *',
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// get a todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const detailTodo = await pool.query('SELECT * FROM todo WHERE id=$1', [id]);
    res.json(detailTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET description = $1 WHERE id=$2',
      [description, id]
    );
    res.json('To do was updated!');
  } catch (error) {
    console.error(error.message);
  }
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE id=$1', [id]);
    res.json('To do was deleted!');
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(5000, () => {
  console.log('server has started on port 5000');
});
