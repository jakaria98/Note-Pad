// components/NotFoundStyles.jsx
import { styled } from '@mui/material/styles';
import { Box, Typography, Button, Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(8, 0),
}));

export const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
});

export const ErrorCodeText = styled(Typography)(({ theme }) => ({
    fontSize: '12rem',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: theme.spacing(2),
    textShadow: '0 4px 8px rgba(33, 150, 243, 0.3)',
    [theme.breakpoints.down('md')]: {
        fontSize: '8rem',
    },
}));

export const TitleText = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    marginBottom: theme.spacing(2),
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
    maxWidth: '500px',
    marginBottom: theme.spacing(4),
    lineHeight: 1.6,
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
    justifyContent: 'center',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
    padding: theme.spacing(1.5, 4),
    borderRadius: 8,
    textTransform: 'none',
    fontSize: '1.1rem',
}));

export const DecorativeElement = styled(Box)(({ theme }) => ({
    width: 200,
    height: 200,
    background: 'radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
}));
