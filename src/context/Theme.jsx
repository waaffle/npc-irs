import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: '#4c5366',
                    color: 'white',
                    padding: '13px 24px 12px',
                    borderRadius: '25px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    '&:hover': {
                        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#3D4353',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3D4353',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#3D4353',
                    },
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        color: '#3D4353',
                    },
                },
            },
        },
    },
});