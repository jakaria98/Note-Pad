// components/Styles/Home/HomeStyles.jsx
import { styled } from '@mui/material/styles';
import { Container, Typography, Button, Box } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    padding: theme.spacing(4, 0),
}));

export const HeaderBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
    },
}));

export const CreateButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    minWidth: '140px',
}));

export const LogoutButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(1),
    minWidth: '120px',
    borderColor: theme.palette.error.main,
    color: theme.palette.error.main,
    '&:hover': {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
}));

export const EmptyStateBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(8, 0),
}));

export const EmptyStateText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
