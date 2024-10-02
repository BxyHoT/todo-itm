import Checkbox from '@mui/material/Checkbox';
import { Button, TextField } from '@mui/material';
import { setCompleted, deleteTask, changeTodoTitle } from '../models/todo.model';
import { ChangeEvent, FormEvent, useState } from 'react';

interface ITodoProps {
    completed: boolean;
    title: string;
    id: string;
    handleChangeTodo: () => void;
}

export const Todo = ({ completed, title, id, handleChangeTodo }: ITodoProps) => {
    const [edit, setEdit] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);
    const setCompletedTask = () => {
        setCompleted(id);
        handleChangeTodo();
    };
    const taskDelete = () => {
        if (!edit) {
            deleteTask(id);
            handleChangeTodo();
        }
    };
    const handleEditToggle = () => {
        setEdit(edit => !edit);
    };
    const handleChangeTask = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.target.value);
    };
    const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        changeTodoTitle(id, taskTitle);
        handleChangeTodo();
        handleEditToggle();
    };

    return (
        <>
            <div style={{ display: !edit ? 'flex' : 'none', alignItems: 'center' }}>
                <Checkbox checked={completed} size='large' color='primary' onClick={setCompletedTask} />
                <p style={{ fontSize: 20 }}>{title}</p>
            </div>
            <form onSubmit={handleOnSubmit}>
                <div style={{ display: edit ? 'flex' : 'none', margin: '15px 0' }}>
                    <TextField value={taskTitle} onChange={handleChangeTask} type='text' required={true} />
                </div>
                <div>
                    <Button sx={{ margin: '0 15px', padding: '0 30px' }} onClick={handleEditToggle}>
                        {!edit ? 'Edit' : 'Cancel'}
                    </Button>
                    <Button sx={{ padding: '0 20px' }} onClick={taskDelete} type={!edit ? 'button' : 'submit'}>
                        {!edit ? 'Delete' : 'Save'}
                    </Button>
                </div>
            </form>
        </>
    );
};
