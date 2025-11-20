// components/Styles/Notes/ModalStyles.jsx
import { styled } from '@mui/material/styles';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
    Divider,
    Typography,
} from '@mui/material';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
        borderRadius: theme.spacing(1),
    },
}));

export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
}));

export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2, 3),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(0.5),
    },
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        borderRadius: theme.spacing(0.5),
    },
}));

export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    padding: theme.spacing(0, 3, 3, 3),
    gap: theme.spacing(1),
}));

export const DialogButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(0.5),
}));

export const TitleContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
    margin: theme.spacing(2, 0),
}));

export const DateText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
