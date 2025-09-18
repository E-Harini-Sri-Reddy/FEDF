import React from 'react';
import TaskPrioritySection from './TaskPrioritySection';
import './App.css';

const TaskList = ({ deadlineCrossedTasks, highPriorityTasks, lowPriorityTasks, onToggleDone, onDeleteTask }) => {
  return (
    <div id="todoList">
      <TaskPrioritySection
        title="Deadline Crossed"
        tasks={deadlineCrossedTasks}
        priorityClass="deadlineCrossed"
        onToggleDone={onToggleDone}
        onDeleteTask={onDeleteTask}
      />
      <TaskPrioritySection
        title="High Priority"
        tasks={highPriorityTasks}
        priorityClass="highPriority"
        onToggleDone={onToggleDone}
        onDeleteTask={onDeleteTask}
      />
      <TaskPrioritySection
        title="Low Priority"
        tasks={lowPriorityTasks}
        priorityClass="lowPriority"
        onToggleDone={onToggleDone}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
};

export default TaskList;
