// components/Styles/Notes/NoteCardStyles.jsx
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.3s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[4],
    },
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    flexGrow: 1,
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
}));

export const CardContentText = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    color: theme.palette.text.secondary,
}));

export const CardDateText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(1),
    display: 'block',
}));

export const StyledCardActions = styled(CardActions)(({ theme }) => ({
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2, 2, 2),
}));

export const CardButton = styled(Button)(({ theme }) => ({
    // Base button styles
}));
