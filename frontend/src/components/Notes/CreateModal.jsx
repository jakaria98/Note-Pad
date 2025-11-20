import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Box,
} from '@mui/material';
import { Add } from '@mui/icons-material';
import { useModalStyles } from '../Styles/Notes/useModalStyles';

const CreateNoteModal = ({ open, onClose, onSubmit }) => {
    const styles = useModalStyles();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && content.trim()) {
            onSubmit({ title: title.trim(), content: content.trim() });
            setTitle('');
            setContent('');
        }
    };

    const handleClose = () => {
        setTitle('');
        setContent('');
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} sx={styles.dialog}>
            <form onSubmit={handleSubmit}>
                <DialogTitle>
                    <Box sx={styles.dialogTitle}>
                        <Add />
                        Create New Note
                    </Box>
                </DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        sx={styles.textField}
                    />
                    <TextField
                        margin="dense"
                        label="Content"
                        multiline
                        rows={8}
                        fullWidth
                        variant="outlined"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </DialogContent>
                <DialogActions sx={styles.dialogActions}>
                    <Button onClick={handleClose} variant="outlined">
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        Create Note
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default CreateNoteModal;
