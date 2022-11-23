import {fireEvent, prettyDOM, render, screen} from "@testing-library/react";
import {TaskList} from "../TaskList";
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
        const mockedHandleCheckboxClick = jest.fn();
        render(
            <TaskList
                taskList={[
                    { taskName: 'Do homework', id: 0 }
                ]}
                deleteTask={jest.fn()}
                isChecked={[]}
                handleCheckboxClick={mockedHandleCheckboxClick}
            />
        );

        const checkbox = screen.getByTestId('teste');
        userEvent.click(checkbox);
        console.log(prettyDOM(checkbox));
        expect(mockedHandleCheckboxClick).toBeCalledTimes(1);
    });

});