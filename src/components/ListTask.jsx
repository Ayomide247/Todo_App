
import React, { useState } from 'react';
import Task from './Task';

function ListTask({ tasks, onToggleTask, onDeleteTask, onEditTask }) {
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter((task) =>
        filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
    );

    return (
        <div className="mb-4">
            <div className="mb-2 font-bold">
                Filter:
                <button
                    onClick={() => setFilter('all')}
                    className="bg-blue-500 text-white p-2 rounded-md ml-2"
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('done')}
                    className="bg-blue-500 text-white p-2 rounded-md ml-2"
                >
                    Done
                </button>
                <button
                    onClick={() => setFilter('notDone')}
                    className="bg-blue-500 text-white p-2 rounded-md ml-2"
                >
                    Not Done
                </button>
            </div>
            <ul>
                {filteredTasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        onToggleTask={onToggleTask}
                        onDeleteTask={onDeleteTask}
                        onEditTask={onEditTask}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ListTask;
