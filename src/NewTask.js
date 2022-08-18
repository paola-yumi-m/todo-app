import React, {useState} from "react";
import {Button} from "@mui/material";

export const NewTask = ({ taskList, setTaskList, newTask, setNewTask }) => {
    function handleChange(e) {
        setNewTask(e.target.value);
    }

    function handleSubmit() {
        setTaskList([...taskList, newTask ]);
    }

    return (
        <div className='new-task'>
            <h1>New Task</h1>
            <div>
                <input className='new-task-field' type='text' id='new-task' onChange={handleChange} />
                <Button />
                <input className='new-task-button' type='submit' value='Add' onClick={handleSubmit} />
            </div>
        </div>
    );
}