import React, {useEffect} from "react";
import { CompletedTasks } from "./CompletedTasks";
import { NewTask } from "./NewTask";
import { AppList } from "./AppList";
import './styles.css';
import { useState } from "react";

export const App = () => {
    const [ taskList, setTaskList ] = useState([
        {
            name: 'Task 1',
            id: 0
        }, {
            name: 'Task 2',
            id: 1
        }, {
            name: 'Task 3',
            id: 2
        }]);
    const [ isChecked, setIsChecked ] = useState([]);
    const [ lastId, setLastId ] = useState(0);
    const [ newTask, setNewTask ] = useState({name: '', id: lastId});

    useEffect(() => {
        if (taskList.length > 0) {
            setLastId(taskList[taskList.length - 1].id);
        }
    }, [taskList, isChecked]);

    const deleteTask = (id) => {
        const currentId = id;
        setTaskList((prevState) => prevState.filter((task) => task.id.toString() !== currentId));
        setIsChecked((prevState) => prevState.filter((task) => task !== currentId));
    }

    return (
        <div className='grid-container'>
            <CompletedTasks isChecked={isChecked} setIsChecked={setIsChecked} taskList={taskList} />
            <NewTask taskList={taskList} setTaskList={setTaskList} newTask={newTask} setNewTask={setNewTask} lastId={lastId} />
            <AppList taskList={taskList} deleteTask={deleteTask} isChecked={isChecked} setIsChecked={setIsChecked} />
        </div>
    );
}