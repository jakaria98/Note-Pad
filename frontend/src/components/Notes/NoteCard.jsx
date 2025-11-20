import React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Visibility, Delete } from '@mui/icons-material';
import { useNoteCardStyles } from '../Styles/Notes/useNoteCardStyles';

const NoteCard = ({ note, onView, onDelete }) => {
    const styles = useNoteCardStyles();

    const truncateContent = (content, maxLength = 100) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    return (
        <Card sx={styles.card}>
            <CardContent sx={styles.cardContent}>
                <Typography variant="h6" component="h2" gutterBottom noWrap sx={styles.title}>
                    {note.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={styles.content}>
                    {truncateContent(note.content)}
                </Typography>
                {note.created_at && (
                    <Typography variant="caption" color="text.secondary" sx={styles.date}>
                        Created: {new Date(note.created_at).toLocaleDateString()}
                    </Typography>
                )}
            </CardContent>
            <CardActions sx={styles.cardActions}>
                <Button size="small" startIcon={<Visibility />} onClick={onView} variant="outlined">
                    View
                </Button>
                <Button
                    size="small"
                    startIcon={<Delete />}
                    onClick={onDelete}
                    variant="outlined"
                    color="error"
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
};

export default NoteCard;
