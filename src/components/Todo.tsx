import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { setCompleted, deleteTask } from '../models/todo.model';

interface ITodoProps {
    completed: boolean;
    title: string;
    id: string;
    handleChangeTodo: () => void;
}

export const Todo = ({ completed, title, id, handleChangeTodo }: ITodoProps) => {
    const setCompletedTask = () => {
        setCompleted(id);
        handleChangeTodo();
    };
    const taskDelete = () => {
        deleteTask(id);
        handleChangeTodo();
    };

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Checkbox checked={completed} size='large' color='primary' onClick={setCompletedTask} />
                <p style={{ fontSize: 20 }}>{title}</p>
            </div>
            <div>
                <Button sx={{ margin: '0 15px', padding: '0 30px' }}>Edit</Button>
                <Button sx={{ padding: '0 20px' }} onClick={taskDelete}>
                    Delete
                </Button>
            </div>
        </>
    );
};
