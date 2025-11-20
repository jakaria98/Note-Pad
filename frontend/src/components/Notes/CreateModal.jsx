import React, { useState } from 'react';
import { Add } from '@mui/icons-material';

// Import styled components
import {
    StyledDialog,
    StyledDialogTitle,
    StyledDialogContent,
    StyledDialogActions,
    StyledTextField,
    StyledTextArea,
    DialogButton,
    TitleContainer,
} from '../Styles/ModalStyles';

const CreateNoteModal = ({ open, onClose, onSubmit }) => {
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
        <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <form onSubmit={handleSubmit}>
                <StyledDialogTitle>
                    <TitleContainer>
                        <Add />
                        Create New Note
                    </TitleContainer>
                </StyledDialogTitle>
                <StyledDialogContent>
                    <StyledTextField
                        autoFocus
                        margin="dense"
                        label="Title"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <StyledTextArea
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
                </StyledDialogContent>
                <StyledDialogActions>
                    <DialogButton onClick={handleClose} variant="outlined">
                        Cancel
                    </DialogButton>
                    <DialogButton type="submit" variant="contained">
                        Create Note
                    </DialogButton>
                </StyledDialogActions>
            </form>
        </StyledDialog>
    );
};

export default CreateNoteModal;
 