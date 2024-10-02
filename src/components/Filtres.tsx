import { Button } from '@mui/material';
import { IHeaderProps } from './Header';

type IFilterProps = Omit<IHeaderProps, 'handleChangeTodo' | 'remaining'>;

export const Filters = ({ handleShowActiveTask, handleShowAllTask, handleShowCompletedTask }: IFilterProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
            <Button sx={{ width: '31%' }} onClick={handleShowAllTask}>
                Show All tasks
            </Button>
            <Button sx={{ width: '31%' }} onClick={handleShowActiveTask}>
                Show Active tasks
            </Button>
            <Button sx={{ width: '31%' }} onClick={handleShowCompletedTask}>
                Show Completed tasks
            </Button>
        </div>
    );
};
