import React, {useState} from "react";

export const AppList = ({ taskList }) => {
    const [ isChecked, setIsChecked ] = useState([]);

    function handleCheckboxClick(e) {
        if (e.target.checked) {
            setIsChecked([...isChecked, e.target.value])
        } else {
            setIsChecked(() => isChecked.filter((task) => task !== e.target.value));
        }
    }

    function setStyle(id) {
        if (isChecked.includes(taskList[id])) {
            return 'list-item-disabled'
        }
        return 'list-item';

    }

    function getTasks() {
        return taskList.map((task, id) => <div key={id}><input value={task} type='checkbox' onChange={handleCheckboxClick} /> <span className={setStyle(id)}>{task}</span></div>)
    }

    return(
        <div className='app-list'>
            <h1>App List</h1>
            <div>{getTasks()}</div>
        </div>
    );
}