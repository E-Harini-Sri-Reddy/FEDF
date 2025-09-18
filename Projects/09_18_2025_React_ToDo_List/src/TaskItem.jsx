import React from 'react';
import './App.css';

const TaskItem = ({ task, onToggleDone, onDelete, priorityClass }) => {
  return (
    <div className={`todo-item ${priorityClass}`}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={onToggleDone}
      />
      <label style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
        {task.description} (Deadline: {task.deadline})
      </label>
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

export default TaskItem;