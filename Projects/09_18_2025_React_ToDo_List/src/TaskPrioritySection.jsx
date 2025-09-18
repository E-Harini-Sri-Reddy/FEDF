import React from 'react';
import TaskItem from './TaskItem';
import './App.css';

const TaskPrioritySection = ({ title, tasks, priorityClass, onToggleDone, onDeleteTask }) => {
  return (
    <div>
      <h3>{title}:</h3>
      <div id={`${priorityClass}Container`}>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleDone={() => onToggleDone(task.id)}
            onDelete={() => onDeleteTask(task.id)}
            priorityClass={priorityClass}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskPrioritySection;
