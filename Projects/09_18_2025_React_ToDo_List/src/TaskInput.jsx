import React, { useState } from 'react';
import './App.css';

const TaskInput = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState('');
  const [deadlineInput, setDeadlineInput] = useState('');

  const handleSubmit = () => {
    onAddTask(taskInput, deadlineInput);
    setTaskInput('');
    setDeadlineInput('');
  };

  return (
    <div className="input-container">
      <input
        type="text"
        id="taskInput"
        placeholder="Enter task..."
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <input
        type="date"
        id="deadlineInput"
        value={deadlineInput}
        onChange={(e) => setDeadlineInput(e.target.value)}
      />
      <button id="addButton" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default TaskInput;