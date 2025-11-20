// components/Styles/Notes/useNoteCardStyles.jsx
export const useNoteCardStyles = () => {
    const styles = {
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: '0.3s',
            '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 4,
            },
        },
        cardContent: {
            flexGrow: 1,
        },
        title: {
            noWrap: true,
        },
        content: {
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
        },
        date: {
            mt: 1,
            display: 'block',
        },
        cardActions: {
            justifyContent: 'space-between',
            px: 2,
            pb: 2,
        },
    };

    return styles;
};
