import {fireEvent, render, screen, rerender } from "@testing-library/react";
import '@testing-library/jest-dom';
import {NewTask} from "../NewTask";
import userEvent from "@testing-library/user-event";

describe('NewTask', () => {
    it('should render input element', () => {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {taskName: '', id: 0};
        render(
            <NewTask
            taskList={['Do homework', 'Clean house', 'Feed the dog']}
            setTaskList={mockedSetTaskList}
            newTask={newTask}
            setNewTask={mockedSetNewTask}
            lastId={0}
            />
        );
        const inputElement = screen.getByPlaceholderText('Task Name');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in input',  async () => {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {taskName: '', id: 0};

        render(
            <NewTask
                taskList={['Do homework', 'Clean house', 'Feed the dog']}
                setTaskList={mockedSetTaskList}
                setNewTask={mockedSetNewTask}
                newTask={newTask}
                lastId={0}
            />
        );
        const inputElement = screen.getByPlaceholderText('Task Name');
        fireEvent.change(inputElement, {target: {value: 'helloooo'}});
        screen.debug()
        expect(inputElement).toHaveValue('Walk on the beach');
    });

    it('should clear input when button Add is clicked', () => {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {taskName: 'hello', id: 0};
        render(
            <NewTask
                taskList={['Do homework', 'Clean house', 'Feed the dog']}
                setTaskList={mockedSetTaskList}
                newTask={newTask}
                setNewTask={mockedSetNewTask}
                lastId={0}
            />
        );
        const inputElement = screen.getByPlaceholderText(/Task Name/i);
        const buttonElement = screen.getByRole('button', {name: 'Add Task'});
        userEvent.type(inputElement, 'Hi');
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    })
})