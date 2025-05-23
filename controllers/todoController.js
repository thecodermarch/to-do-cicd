const db = require('../db');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM todos');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new todo
exports.createTodo = async (req, res) => {
  const { task } = req.body;
  if (!task) return res.status(400).json({ error: 'Task is required' });

  try {
    const [result] = await db.query('INSERT INTO todos (task) VALUES (?)', [task]);
    res.status(200).json({ id: result.insertId, task });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a todo
exports.deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM todos WHERE id = ?', [id]);
    res.status(200).json({ message: 'Todo deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
