import React from "react";
import {Checkbox} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const TaskList = ({ taskList, deleteTask, isChecked, handleCheckboxClick }) => {
    function handleClick(e) {
        handleCheckboxClick(e);
    }

    function setStyle(id) {
        if (isChecked.includes(id.toString())) {
            return 'list-item-disabled'
        }
        return 'list-item';

    }

    function handleDelete(e) {
        const id = e.currentTarget.id;
        deleteTask(id);
    }

    function getTasks() {
        return taskList.map((task) => <div className='task-list' key={task.id}>
            <Checkbox data-testid='checkbox' value={task.id} onChange={handleClick} />
            <span data-testid='span' className={setStyle(task.id)}>{task.taskName}</span>
            <div id={task.id} onClick={handleDelete}><DeleteIcon className='delete-icon' /></div>
        </div>)
    }

    return(
        <div className='app-list'>
            <h1>Tasks</h1>
            <ul>{getTasks()}</ul>
        </div>
    );
}