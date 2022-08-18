import React, {useState} from "react";
import {Button, TextField} from "@mui/material";

export const NewTask = ({ taskList, setTaskList, newTask, setNewTask }) => {
    function handleChange(e) {
        setNewTask({name: e.target.value, id: lastId});
    }

    function handleSubmit() {
        setTaskList([...taskList, newTask ]);
        setNewTask('');
    }

    return (
        <div className='new-task'>
            <h1>New Task</h1>
            <div className='new-task-container'>
                <TextField className='new-task-field' label='Task Name' onChange={handleChange} value={newTask.id} />
                <Button className='new-task-button' variant='outlined' onClick={handleSubmit}>Add Task</Button>
            </div>
        </div>
    );
}