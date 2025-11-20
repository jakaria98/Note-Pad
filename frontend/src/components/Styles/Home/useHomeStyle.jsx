// components/Styles/Home/useHomeStyles.jsx
export const useHomeStyles = () => {
    const styles = {
        container: {
            py: 4,
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 4,
        },
        title: {
            fontWeight: 'bold',
        },
        createButton: {
            borderRadius: 2,
        },
        emptyState: {
            textAlign: 'center',
            py: 8,
        },
        emptyText: {
            color: 'text.secondary',
        },
    };

    return styles;
};
