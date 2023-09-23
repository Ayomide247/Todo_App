import React, { useState } from 'react';

function Task({ task, onToggleTask, onDeleteTask, onEditTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(task.description);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEditTask(task.id, editedDescription);
        setIsEditing(false);
    };

    return (
        <li className="mb-2">
            {isEditing ? (
                <div>
                    <input
                        type="text"
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="border p-2"
                    />
                    <button
                        onClick={handleSaveClick}
                        className="bg-blue-500 text-white p-2 rounded-md ml-2"
                    >
                        Save
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={task.isDone}
                        onChange={() => onToggleTask(task.id)}
                        className="mr-2"
                    />
                    <span className={task.isDone ? 'line-through' : ''}>
                        {task.description}
                    </span>
                    <button
                        onClick={handleEditClick}
                        className="bg-blue-500 text-white p-2 rounded-md ml-2"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDeleteTask(task.id)}
                        className="bg-red-500 text-white p-2 rounded-md ml-2"
                    >
                        Delete
                    </button>
                </div>
            )}
        </li>
    );
}

export default Task;
