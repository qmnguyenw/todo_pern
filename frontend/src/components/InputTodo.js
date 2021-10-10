import React from 'react';
import { Fragment } from 'react';

const InputTodo = () => {
  return (
    <Fragment>
      <h1 className='text-center mt-5'>To Do List</h1>
      <form>
        <input type='text' />
        <button>Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
