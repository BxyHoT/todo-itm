import { Todo } from './Todo';
import { todosType } from '../models/todo.model';

interface ITodoListProps {
    todoArray: todosType[] | [];
    handleChangeTodo: () => void;
    showTask: {
        all: boolean;
        active: boolean;
        completed: boolean;
    };
}

export const TodoList = ({ todoArray, handleChangeTodo, showTask }: ITodoListProps) => {
    const filterTodo = () => {
        const { active, completed } = showTask;
        if (active) return todoArray.filter(({ completed }) => !completed);
        if (completed) return todoArray.filter(({ completed }) => completed);
        return todoArray;
    };
    return (
        <>
            {filterTodo().map(({ id, completed, title }) => {
                return (
                    <li key={id} style={{ listStyle: 'none' }}>
                        <Todo completed={completed} title={title} id={id} handleChangeTodo={handleChangeTodo}></Todo>
                    </li>
                );
            })}
        </>
    );
};
