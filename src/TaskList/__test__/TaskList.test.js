import { render, screen } from "@testing-library/react";
import { TaskList } from "../TaskList";
import userEvent from "@testing-library/user-event";

describe('TaskList', function () {
    it('should render initial tasks', function () {
        render(
            <TaskList
                taskList={[
                    { taskName: 'Do homework', id: 0 },
                    { taskName: 'Feed the dog', id: 1 },
                    { taskName: 'Water plants', id: 2 }
                ]}
                deleteTask={jest.fn()}
                isChecked={[]}
                setIsChecked={jest.fn()}
            />
        );

        const spanElements = screen.getAllByTestId('span');
        expect(spanElements.length).toBe(3);
        expect(spanElements[0].textContent).toBe('Do homework');
        expect(spanElements[1].textContent).toBe('Feed the dog');
        expect(spanElements[2].textContent).toBe('Water plants');
    });

    it('should cross task text style when checkbox is clicked', function () {
        render(
            <TaskList
                taskList={[
                    { taskName: 'Do homework', id: 0 },
                    { taskName: 'Feed the dog', id: 1 },
                    { taskName: 'Water plants', id: 2 }
                ]}
                deleteTask={jest.fn()}
                isChecked={["0"]}
                handleCheckboxClick={jest.fn()}
            />
        );
        const spanElements = screen.getAllByTestId('span');
        expect(spanElements[0].className).toBe('list-item-disabled');
        expect(spanElements[1].className).toBe('list-item');
        expect(spanElements[2].className).toBe('list-item');
    });

    it('should call hancleCheckboxClick when checkbox is clicked', function () {
        const mockedOnChange = jest.fn();
        render(
            <TaskList
                taskList={[
                    { taskName: 'Do homework', id: 0 }
                ]}
                deleteTask={jest.fn()}
                isChecked={[]}
                handleCheckboxClick={mockedOnChange}
            />
        );

        const checkbox = screen.getByRole('checkbox');
        userEvent.click(checkbox);
        expect(mockedOnChange).toBeCalledTimes(1);
    });

    it('should call deleteTask when delete button is clicked', function () {
        const mockHandleDelete = jest.fn();
        render(
            <TaskList
                taskList={[
                    { taskName: 'Do homework', id: 0 }
                ]}
                deleteTask={mockHandleDelete}
                isChecked={[]}
                handleCheckboxClick={jest.fn()}
            />
        );

        const deleteButton = screen.getByTestId('delete');
        userEvent.click(deleteButton);
        expect(mockHandleDelete).toBeCalledTimes(1);
    });

});