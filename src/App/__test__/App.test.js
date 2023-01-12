import {fireEvent, render, screen} from "@testing-library/react";
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

        const inputField = screen.getByPlaceholderText('Task Name');
        userEvent.type(inputField, 'Do homework');
        const addButton = screen.getByRole('button', {name: 'Add Task'});
        fireEvent.click(addButton);
        const taskList = screen.getAllByTestId('span');

        expect(taskList.length).toBe(4);
        expect(taskList[3].innerHTML).toBe('Do homework');
    });

    it('should add task to Completed Tasks when checkbox is checked', function () {
        render(
            <App />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[2]);
        const completedTasks = screen.getAllByRole('listitem');

        expect(completedTasks.length).toBe(2);
        expect(completedTasks[0].innerHTML).toBe('Task 1');
        expect(completedTasks[1].innerHTML).toBe('Task 3');
    });

    it('should remove task of Completed Tasks when checkbox is unchecked', function () {
        render(
            <App />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[1]);
        fireEvent.click(checkboxes[2]);
        fireEvent.click(checkboxes[2]);
        const completedTasks = screen.getAllByRole('listitem');

        expect(completedTasks.length).toBe(1)
        expect(completedTasks[0].innerHTML).toBe('Task 2');
    });

    it('should remove task from TaskList when delete button is clicked', function () {
        render(
            <App />
        );

        const deleteButtons = screen.getAllByTestId('delete');
        fireEvent.click(deleteButtons[0]);
        fireEvent.click(deleteButtons[2]);
        const taskList = screen.getAllByTestId('span');

        expect(taskList.length).toBe(1);
        expect(taskList[0].innerHTML).toBe('Task 2');
    });

    it('should remove task from completed when task is deleted', function () {
        render(
            <App />
        );

        const checkboxes = screen.getAllByRole('checkbox');
        fireEvent.click(checkboxes[0]);
        fireEvent.click(checkboxes[1]);
        fireEvent.click(checkboxes[2]);
        const deleteButtons = screen.getAllByTestId('delete');
        fireEvent.click(deleteButtons[0]);
        fireEvent.click(deleteButtons[2]);
        const completedTasks = screen.getAllByTestId('completed');

        expect(completedTasks.length).toBe(1);
        expect(completedTasks[0].innerHTML).toBe('Task 2');
    });

    it('should do nothing when there are no tasks', function () {
        render(
            <App />
        );

        const deleteButtons = screen.getAllByTestId('delete');
        fireEvent.click(deleteButtons[0]);
        fireEvent.click(deleteButtons[1]);
        fireEvent.click(deleteButtons[2]);
        const checkboxes = screen.queryAllByRole('checkbox');

        expect(checkboxes.length).toBe(0);
    });
});