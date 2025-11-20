import React, { useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';

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
    StyledDivider,
    DateText,
} from '../Styles/ModalStyles';

const ViewNoteModal = ({ open, onClose, note, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    React.useEffect(() => {
        if (note) {
            setEditTitle(note.title);
            setEditContent(note.content);
        }
    }, [note]);

    const handleUpdate = () => {
        if (editTitle.trim() && editContent.trim()) {
            onUpdate(note.id, {
                title: editTitle.trim(),
                content: editContent.trim(),
            });
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            onDelete(note.id);
            onClose();
        }
    };

    const handleClose = () => {
        setIsEditing(false);
        onClose();
    };

    if (!note) return null;

    return (
        <StyledDialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
            <StyledDialogTitle>
                <TitleContainer>
                    {isEditing ? (
                        <StyledTextField
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            variant="outlined"
                            fullWidth
                        />
                    ) : (
                        <Typography variant="h5" component="h2">
                            {note.title}
                        </Typography>
                    )}
                </TitleContainer>
            </StyledDialogTitle>

            <StyledDialogContent>
                {isEditing ? (
                    <StyledTextArea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        multiline
                        rows={12}
                        fullWidth
                        variant="outlined"
                    />
                ) : (
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', py: 1 }}>
                        {note.content}
                    </Typography>
                )}

                {note.created_at && (
                    <>
                        <StyledDivider />
                        <DateText variant="caption">
                            Created: {new Date(note.created_at).toLocaleString()}
                        </DateText>
                    </>
                )}
            </StyledDialogContent>

            <StyledDialogActions>
                {isEditing ? (
                    <>
                        <DialogButton
                            startIcon={<Cancel />}
                            onClick={() => {
                                setIsEditing(false);
                                setEditTitle(note.title);
                                setEditContent(note.content);
                            }}
                            variant="outlined"
                        >
                            Cancel
                        </DialogButton>
                        <DialogButton
                            startIcon={<Save />}
                            onClick={handleUpdate}
                            variant="contained"
                        >
                            Save Changes
                        </DialogButton>
                    </>
                ) : (
                    <>
                        <DialogButton
                            startIcon={<Edit />}
                            onClick={() => setIsEditing(true)}
                            variant="outlined"
                        >
                            Edit
                        </DialogButton>
                        <DialogButton
                            startIcon={<Delete />}
                            onClick={handleDelete}
                            variant="outlined"
                            color="error"
                        >
                            Delete
                        </DialogButton>
                        <DialogButton onClick={handleClose} variant="contained">
                            Close
                        </DialogButton>
                    </>
                )}
            </StyledDialogActions>
        </StyledDialog>
    );
};

export default ViewNoteModal;
