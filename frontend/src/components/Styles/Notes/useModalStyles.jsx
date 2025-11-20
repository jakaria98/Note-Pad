// components/Styles/Notes/useModalStyles.jsx
export const useModalStyles = () => {
    const styles = {
        dialog: {
            maxWidth: 'md',
            fullWidth: true,
        },
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        },
        textField: {
            mb: 2,
        },
        dialogActions: {
            px: 3,
            pb: 3,
            gap: 1,
        },
        divider: {
            my: 2,
        },
    };

    return styles;
};
