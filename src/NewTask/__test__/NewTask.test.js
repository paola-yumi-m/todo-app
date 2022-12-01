import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import {NewTask} from "../NewTask";
import userEvent from "@testing-library/user-event";

describe('NewTask', () => {
    function newTaskComponent() {
        render(
            <NewTask
                taskList={['Do homework', 'Clean house', 'Feed the dog']}
                setTaskList={jest.fn()}
                newTask={{taskName: '', id: 0}}
                setNewTask={jest.fn()}
                lastId={0}
            />
        );
    }

    it('should render input element', () => {
        newTaskComponent();
        const inputElement = screen.getByPlaceholderText('Task Name');
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in input',  async () => {
        newTaskComponent();
        const inputElement = screen.getByPlaceholderText('Task Name');
        fireEvent.change(inputElement, {target: {value: 'Walk on the beach'}});
        expect(inputElement).toHaveValue('Walk on the beach');
    });

    it('should render Add button', () => {
        newTaskComponent();
        const buttonElement = screen.getByRole('button', {name: 'Add Task'});
        expect(buttonElement).toBeInTheDocument();
    })

    it('should clear input when Add button is clicked', () => {
        newTaskComponent();
        const inputElement = screen.getByPlaceholderText('Task Name');
        const buttonElement = screen.getByRole('button', {name: 'Add Task'});
        userEvent.type(inputElement, 'Hi');
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe("");
    })
})