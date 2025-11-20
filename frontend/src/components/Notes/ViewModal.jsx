import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Typography,
    Button,
    Box,
    Divider,
} from '@mui/material';
import { Edit, Delete, Save, Cancel } from '@mui/icons-material';
import { useModalStyles } from '../Styles/Notes/useModalStyles';

const ViewNoteModal = ({ open, onClose, note, onUpdate, onDelete }) => {
    const styles = useModalStyles();
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
        <Dialog open={open} onClose={handleClose} sx={styles.dialog}>
            <DialogTitle>
                <Box sx={styles.dialogTitle}>
                    {isEditing ? (
                        <TextField
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            variant="outlined"
                            fullWidth
                            sx={styles.textField}
                        />
                    ) : (
                        <Typography variant="h5" component="h2">
                            {note.title}
                        </Typography>
                    )}
                </Box>
            </DialogTitle>

            <DialogContent>
                {isEditing ? (
                    <TextField
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
                        <Divider sx={styles.divider} />
                        <Typography variant="caption" color="text.secondary">
                            Created: {new Date(note.created_at).toLocaleString()}
                        </Typography>
                    </>
                )}
            </DialogContent>

            <DialogActions sx={styles.dialogActions}>
                {isEditing ? (
                    <>
                        <Button
                            startIcon={<Cancel />}
                            onClick={() => {
                                setIsEditing(false);
                                setEditTitle(note.title);
                                setEditContent(note.content);
                            }}
                            variant="outlined"
                        >
                            Cancel
                        </Button>
                        <Button startIcon={<Save />} onClick={handleUpdate} variant="contained">
                            Save Changes
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            startIcon={<Edit />}
                            onClick={() => setIsEditing(true)}
                            variant="outlined"
                        >
                            Edit
                        </Button>
                        <Button
                            startIcon={<Delete />}
                            onClick={handleDelete}
                            variant="outlined"
                            color="error"
                        >
                            Delete
                        </Button>
                        <Button onClick={handleClose} variant="contained">
                            Close
                        </Button>
                    </>
                )}
            </DialogActions>
        </Dialog>
    );
};

export default ViewNoteModal;
