import { TextField, Button } from '@mui/material';
import { ChangeEvent, FormEvent, useState } from 'react';
import { setNewTodo } from '../models/todo.model';

export const TaskForm = ({ handleChangeTodo }: { handleChangeTodo: () => void }) => {
    const [task, setTask] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setNewTodo(task);
        setTask('');
        handleChangeTodo();
    };
    return (
        <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex' }}>
                <TextField
                    type='text'
                    variant='outlined'
                    fullWidth={true}
                    required={true}
                    size='small'
                    placeholder='New todo...'
                    value={task}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <Button type='submit' sx={{ padding: '0 30px' }}>
                    Add
                </Button>
            </div>
        </form>
    );
};
