import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {NewTask} from "../NewTask";

describe('NewTask', () => {
    it('should render input element', () => {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {name: '', id: 0};
        render(
            <NewTask
            taskList={['Do homework', 'Clean house', 'Feed the dog']}
            setTaskList={mockedSetTaskList}
            newTask={newTask}
            setNewTask={mockedSetNewTask}
            lastId={0}
            />
        );
        const inputElement = screen.getByLabelText('Task Name');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in input', function () {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {name: '', id: 0};
        render(
            <NewTask
                taskList={['Do homework', 'Clean house', 'Feed the dog']}
                setTaskList={mockedSetTaskList}
                newTask={newTask}
                setNewTask={mockedSetNewTask}
                lastId={0}
            />
        );
        const inputElement = screen.getByLabelText('Task Name');
        fireEvent.change(inputElement, {target: {value: 'Walk on the beach'}});
        screen.debug();
        expect(inputElement.value).toBe('Walk on the beach');
    });
})