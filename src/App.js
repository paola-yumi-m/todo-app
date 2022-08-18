import React, {useEffect} from "react";
import { TaskMenu } from "./TaskMenu";
import { NewTask } from "./NewTask";
import { AppList } from "./AppList";
import './styles.css';
import { useState } from "react";

export const App = () => {
    const [ taskList, setTaskList ] = useState(['Task 1', 'Task 2', 'Task 3']);
    const [ newTask, setNewTask ] = useState(null);
    console.log(taskList);

    useEffect(() => {

    }, [taskList]);

    return (
        <div className='grid-container'>
            <TaskMenu />
            <NewTask taskList={taskList} setTaskList={setTaskList} newTask={newTask} setNewTask={setNewTask} />
            <AppList taskList={taskList} />
        </div>
    );
}