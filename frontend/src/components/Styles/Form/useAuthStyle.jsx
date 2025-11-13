import { useTheme } from '@mui/material/styles';

export const useAuthFormStyles = () => {
    const theme = useTheme();

    const styles = {
        container: {
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        paper: {
            padding: 4,
            width: '100%',
            [theme.breakpoints.down('sm')]: {
                padding: 3,
            },
        },
        header: {
            textAlign: 'center',
            marginBottom: 2,
        },
        switchText: {
            textAlign: 'center',
            marginBottom: 3,
            color: 'text.secondary',
        },
        switchButton: {
            textTransform: 'none',
            minWidth: 'auto',
            fontWeight: 600,
        },
        form: {
            marginTop: 1,
        },
        textField: {
            marginTop: 2,
            marginBottom: 1,
        },
        submitButton: {
            marginTop: 3,
            marginBottom: 2,
            padding: '12px 0',
            fontSize: '1rem',
            fontWeight: 600,
        },
        errorAlert: {
            marginBottom: 2,
        },
        toggleSwitch: {
            justifyContent: 'center',
            marginBottom: 2,
        },
    };

    return styles;
};
