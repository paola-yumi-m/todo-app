import React, {useState} from "react";
import {Button, TextField} from "@mui/material";

export const NewTask = ({ taskList, setTaskList, newTask, setNewTask, lastId }) => {
    function handleChange(e) {
        setNewTask({name: e.target.value, id: lastId + 1});
    }

    function handleSubmit() {
        setTaskList([...taskList, newTask ]);
        setNewTask({taskName: '', id: lastId + 1});
    }

    return (
        <div className='new-task'>
            <h1>New Task</h1>
            <div className='new-task-container'>
                <TextField className='new-task-field' placeholder='Task Name' onChange={handleChange} value={newTask.taskName} id={newTask.id.toString()} />
                <Button className='new-task-button' variant='outlined' onClick={handleSubmit}>Add Task</Button>
            </div>
        </div>
    );
}