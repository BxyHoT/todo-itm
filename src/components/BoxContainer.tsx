import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from './Header';
import { Box } from '@mui/material';
import { TodoList } from './TodoList';
import { Theme } from './Theme';
import { todos } from '../models/todo.model';
import { useState } from 'react';

export default function BoxContainer() {
    const [todoArray, setTodoArray] = useState([...todos]);
    const [showTask, setShowTask] = useState({ all: true, active: false, completed: false });
    const handleChangeTodo = () => {
        setTodoArray([...todos]);
    };
    const handleShowAllTask = () => {
        setShowTask({ all: true, active: false, completed: false });
    };
    const handleShowActiveTask = () => {
        setShowTask({ all: false, active: true, completed: false });
    };
    const handleShowCompletedTask = () => {
        setShowTask({ all: false, active: false, completed: true });
    };

    return (
        <Theme>
            <CssBaseline />
            <Container maxWidth='sm'>
                <Box
                    sx={{ height: '100%', overflowX: 'hidden' }}
                    children={
                        <>
                            <Header
                                handleChangeTodo={handleChangeTodo}
                                handleShowAllTask={handleShowAllTask}
                                handleShowActiveTask={handleShowActiveTask}
                                handleShowCompletedTask={handleShowCompletedTask}
                                remaining={todoArray.filter(({ completed }) => !completed).length}
                            />
                            <TodoList todoArray={todoArray} handleChangeTodo={handleChangeTodo} showTask={showTask} />
                        </>
                    }
                />
            </Container>
        </Theme>
    );
}
