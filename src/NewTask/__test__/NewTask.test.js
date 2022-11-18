import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {NewTask} from "../NewTask";
import userEvent from "@testing-library/user-event";

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

    it('should be able to type in input',  () => {
        const mockedSetTaskList = jest.fn();
        const mockedSetNewTask = jest.fn();
        const newTask = {name: '', id: 0};

        render(
            <NewTask
                taskList={['Do homework', 'Clean house', 'Feed the dog']}
                setTaskList={mockedSetTaskList}
                setNewTask={mockedSetNewTask}
                newTask={newTask}
                lastId={0}
            />
        );
        const inputElement = screen.getByLabelText('Task Name');
        userEvent.type(inputElement, 'Go grocery shopping')
        expect(inputElement).toHaveValue('Walk on the beach');
    });
})