// hooks/useNotFoundStyles.js
import { useTheme } from '@mui/material/styles';

export const useNotFoundStyles = () => {
    const theme = useTheme();

    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 8,
        },
        errorCode: {
            fontSize: { xs: '8rem', md: '12rem' },
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            mb: 2,
            textShadow: '0 4px 8px rgba(33, 150, 243, 0.3)',
        },
        title: {
            fontWeight: '600',
            color: 'text.primary',
            mb: 2,
        },
        description: {
            maxWidth: '500px',
            mb: 4,
            lineHeight: 1.6,
        },
        buttonContainer: {
            display: 'flex',
            gap: 2,
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        button: {
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '1.1rem',
        },
        decorativeElement: {
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: -1,
        },
    };

    return styles;
};
