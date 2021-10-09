const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

// middleware
app.use(cors());
app.use(express.json());

// ROUTES //

// get all todo

// create a todo

// get a todo

// update a todo

// delete a todo


app.listen(5000, () => {
  console.log('server has started on port 5000');
});
