import React from "react";
import CheckIcon from '@mui/icons-material/Check';

export const CompletedTasks = ({ isChecked, setIsChecked }) => {
    function getCompletedTasks() {
        return isChecked.map((task) => <div className='completed-item-container'><CheckIcon /><li className='completed-item' key={task.id}>{task.name}</li></div>);
    }

    return (
        <div className='task-menu'>
            <h1>Completed Tasks</h1>
            <div>
                <ul>{getCompletedTasks()}</ul>
            </div>
        </div>
    );
}