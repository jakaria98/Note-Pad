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
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
}));

export const CreateButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.spacing(1),
}));

export const EmptyStateBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: theme.spacing(8, 0),
}));

export const EmptyStateText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));
