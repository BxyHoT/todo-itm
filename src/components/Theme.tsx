import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactElement } from 'react';

const theme = createTheme({
    components: {
        MuiCheckbox: {
            styleOverrides: {
                root: {
                    backgroundColor: '#f8f8f2',
                    borderRadius: 2,
                    width: 25,
                    height: 25,
                    margin: 20,
                    '&:hover': {
                        backgroundColor: '#f8f8f2',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: 'inherit',
                    border: '2px solid #bd93f9',
                    borderRadius: '10px',
                    height: '35px',
                    padding: '10px 0',
                    '&:hover': {
                        backgroundColor: '#bd93f9',
                    },
                    '&:active': {
                        transform: 'scale(0.95)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    position: 'relative',
                    marginRight: '15px',
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '10px',
                        backgroundColor: '#f8f8f2',
                        height: '35px',
                        '& fieldset': {
                            border: '2px solid #bd93f9',
                        },
                        '&:hover fieldset': {
                            borderColor: '#bd93f9',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#44475a',
                        },
                    },
                    '& .MuiInputBase-input': {
                        height: '100%',
                    },
                    '&:focus-within::after': {
                        content: '""',
                        position: 'absolute',
                        top: '-1px',
                        left: '-1px',
                        right: '-1px',
                        bottom: '-1px',
                        border: '1px solid #f8f8f2',
                        pointerEvents: 'none',
                        borderRadius: '10px',
                        zIndex: 1,
                    },
                },
            },
        },
    },
});

export const Theme = ({ children }: { children: ReactElement | ReactElement[] }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
