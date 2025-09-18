import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (taskInput, deadlineInput) => {
    if (!taskInput || !deadlineInput) {
      alert('Please enter a task and a deadline.');
      return;
    }

    const today = new Date();
    const taskDeadline = new Date(deadlineInput);

    let priority;
    if (taskDeadline < today) {
      priority = 'deadlineCrossed';
    } else if (taskDeadline.getTime() <= today.getTime() + 3 * 24 * 60 * 60 * 1000) {
      priority = 'highPriority';
    } else {
      priority = 'lowPriority';
    }

    const newTask = {
      id: Date.now(),
      description: taskInput,
      deadline: deadlineInput,
      done: false,
      priority,
    };

    setTasks([...tasks, newTask]);
  };

  const handleToggleDone = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const deadlineCrossedTasks = tasks.filter(task => task.priority === 'deadlineCrossed');
  const highPriorityTasks = tasks.filter(task => task.priority === 'highPriority');
  const lowPriorityTasks = tasks.filter(task => task.priority === 'lowPriority');

  return (
    <div className="container">
      <h1>To-do List</h1>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        deadlineCrossedTasks={deadlineCrossedTasks}
        highPriorityTasks={highPriorityTasks}
        lowPriorityTasks={lowPriorityTasks}
        onToggleDone={handleToggleDone}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
