import {render, screen} from "@testing-library/react";
import {CompletedTasks} from "../CompletedTasks";

describe('CompletedTasks', function () {
    it('should render completed tasks', function () {
        const taskList = [
            {
                taskName: 'Walk the dog',
                id: 0
            },
            {
                taskName: 'Go shopping',
                id: 1
            },
            {
                taskName: 'Water plants',
                id: 2
            }
        ];
        render(
            <CompletedTasks
                isChecked={["0", "2"]}
                taskList={taskList}
            />
        );

        const completedTasks = screen.getAllByRole('listitem');
        expect(completedTasks.length).toBe(2);
        expect(completedTasks[0].innerHTML).toBe('Walk the dog');
        expect(completedTasks[1].innerHTML).toBe('Water plants');
    });
});