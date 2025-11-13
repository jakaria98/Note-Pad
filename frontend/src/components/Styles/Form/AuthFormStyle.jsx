import { styled } from '@mui/material/styles';
import {
    Box,
    TextField,
    Button,
    Typography,
    Container,
    Paper,
    Alert,
    FormControlLabel,
} from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '80vh',
    justifyContent: 'center',
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    width: '100%',
    borderRadius: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3),
    },
}));

export const HeaderText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    fontWeight: 600,
    color: theme.palette.primary.main,
}));

export const SwitchText = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
}));

export const SwitchButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    minWidth: 'auto',
    fontWeight: 600,
    color: theme.palette.primary.main,
    '&:hover': {
        backgroundColor: 'transparent',
        textDecoration: 'underline',
    },
}));

export const StyledForm = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(0.5),
    },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5),
    fontSize: '1rem',
    fontWeight: 600,
    borderRadius: theme.spacing(0.5),
    '&:disabled': {
        backgroundColor: theme.palette.action.disabled,
        color: theme.palette.text.disabled,
    },
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(0.5),
}));

export const ToggleFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiFormControlLabel-label': {
        fontWeight: 500,
    },
}));
