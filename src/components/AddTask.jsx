
import React, { useState } from 'react';

function AddTask({ onAddTask }) {
    const [description, setDescription] = useState('');

    const handleAddTask = () => {
        if (description) {
            onAddTask({ description, isDone: false });
            setDescription('');
        }
    };

    return (
        <div className="mb-4 flex">
            <input
                type="text"
                placeholder="Enter task description"
                className="border p-2 w-full my-5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button
                onClick={handleAddTask}
                className="bg-blue-500 text-white p-2 rounded-md ml-2 my-5 w-[30%]"
            >
                Add Task
            </button>
        </div>
    );
}

export default AddTask;
