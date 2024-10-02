import { Filters } from './Filtres';
import { TaskForm } from './TaskForm';
import { TaskRemaining } from './TaskRemaining';

export interface IHeaderProps {
    handleChangeTodo: () => void;
    handleShowCompletedTask: () => void;
    handleShowAllTask: () => void;
    handleShowActiveTask: () => void;
    remaining: number;
}

export const Header = ({
    handleChangeTodo,
    handleShowCompletedTask,
    handleShowAllTask,
    handleShowActiveTask,
    remaining,
}: IHeaderProps) => {
    return (
        <>
            <h1 style={{ textAlign: 'center', margin: 0, padding: 21 }}>Todont</h1>
            <TaskForm handleChangeTodo={handleChangeTodo} />
            <Filters
                handleShowCompletedTask={handleShowCompletedTask}
                handleShowAllTask={handleShowAllTask}
                handleShowActiveTask={handleShowActiveTask}
            />
            <TaskRemaining remaining={remaining} />
        </>
    );
};
