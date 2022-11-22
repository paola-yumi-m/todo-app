import {render, screen} from "@testing-library/react";
import {TaskList} from "../TaskList";

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

        const divElements = screen.getAllByTestId('span');
        expect(divElements.length).toBe(3);
        expect(divElements[0].textContent).toBe('Do homework');
        expect(divElements[1].textContent).toBe('Feed the dog');
        expect(divElements[2].textContent).toBe('Water plants');
    });
});