import React from "react";
import CheckIcon from '@mui/icons-material/Check';

export const CompletedTasks = ({ isChecked, taskList }) => {
    function getCompletedTasks() {
        const completed = taskList.filter((task) => isChecked.includes(task.id.toString()));
        return completed.map((task) => <div className='completed-item-container' key={task.id}><CheckIcon/><li className='completed-item'>{task.name}</li></div>);
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