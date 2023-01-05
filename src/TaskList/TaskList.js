import React from "react";
import {Checkbox} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskList = ({ taskList, deleteTask, isChecked, handleCheckboxClick }) => {
    function isCheckboxChecked(id) {
        return isChecked.includes(id.toString());
    }

    function handleDelete(e) {
        const id = e.currentTarget.id;
        deleteTask(id);
    }

    function getTasks() {
        return taskList.map((task) => <div className='task-list' key={task.id}>
            <Checkbox data-testid='checkbox' value={task.id} onClick={handleCheckboxClick} checked={isCheckboxChecked(task.id)} />
            <span data-testid='span' className={isCheckboxChecked(task.id) ? 'list-item-completed' : 'list-item'}>{task.taskName}</span>
            <div id={task.id} onClick={handleDelete} data-testid='delete'><DeleteIcon className='delete-icon' /></div>
        </div>)
    }

    return(
        <div className='app-list'>
            <h1>Tasks</h1>
            <ul>{getTasks()}</ul>
        </div>
    );
}