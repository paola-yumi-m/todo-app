import {fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import {App} from "../App";
import userEvent from "@testing-library/user-event";

describe('App', function () {
    it('should render <CompletedTasks />', function () {
        render(
          <App />
        );

        const completedTasks = screen.queryByText('Completed Tasks');
        expect(completedTasks.innerHTML).toBe('Completed Tasks');
    });

    it('should render <NewTask />', function () {
        render(
          <App />
        );

        const newTask = screen.queryByText('New Task');
        expect(newTask.innerHTML).toBe('New Task');
    });

    it('should render <TaskList />', function () {
        render(
          <App />
        );

        const taskList = screen.queryByText('Tasks');
        expect(taskList.innerHTML).toBe('Tasks');
    });

    it('should add new task to taskList when Add button is clicked', function () {
        render(
            <App />
        );

        const addButton = screen.getByRole('button', {name: 'Add Task'});
        const inputField = screen.getByPlaceholderText('Task Name');
        const taskList = screen.getAllByTestId('span');
        fireEvent.change(inputField, 'Do homework');
        fireEvent.click(addButton);

        expect(taskList.length).toBe(4);
    });
});