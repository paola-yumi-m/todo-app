import React, {useState} from "react";
import {Checkbox, SvgIcon} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export const AppList = ({ taskList, deleteTask, isChecked, setIsChecked }) => {
    function handleCheckboxClick(e) {
        if (e.target.checked) {
            setIsChecked([...isChecked, e.target.value])
        } else {
            setIsChecked(() => isChecked.filter((id) => id !== e.target.value
            ));
        }
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
            <Checkbox value={task.id} onChange={handleCheckboxClick} />
            <span className={setStyle(task.id)}>{task.name}</span>
            <div id={task.id} onClick={handleDelete}><DeleteIcon className='delete-icon' /></div>
        </div>)
    }

    return(
        <div className='app-list'>
            <h1>Tasks</h1>
            <div>{getTasks()}</div>
        </div>
    );
}