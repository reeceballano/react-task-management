import React from 'react';

const Task = ({ task, removeTask, updateTask }) => {
    const { id, name, status } = task;

    return(
        <div className={ `task-item ${(status ? 'completed' : 'not-complete')}`}>
            <span>Name: { name }</span> <br />
            <span>Status: { (status ? 'Completed' : 'Not Done') }</span> < br />
            <div className="action-wrapper">
                <button onClick={() => updateTask(id)}>Update</button>
                <button onClick={() => removeTask(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Task;