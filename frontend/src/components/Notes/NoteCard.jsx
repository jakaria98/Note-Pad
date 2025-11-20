import React from 'react';
import { Visibility, Delete } from '@mui/icons-material';

// Import styled components
import {
    StyledCard,
    StyledCardContent,
    CardTitle,
    CardContentText,
    CardDateText,
    StyledCardActions,
    CardButton,
} from '../Styles/NoteCardStyles';

const NoteCard = ({ note, onView, onDelete }) => {
    const truncateContent = (content, maxLength = 100) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    return (
        <StyledCard>
            <StyledCardContent>
                <CardTitle variant="h6" component="h2" gutterBottom>
                    {note.title}
                </CardTitle>
                <CardContentText variant="body2">{truncateContent(note.content)}</CardContentText>
                {note.created_at && (
                    <CardDateText variant="caption" color="text.secondary">
                        Created: {new Date(note.created_at).toLocaleDateString()}
                    </CardDateText>
                )}
            </StyledCardContent>
            <StyledCardActions>
                <CardButton
                    size="small"
                    startIcon={<Visibility />}
                    onClick={onView}
                    variant="outlined"
                >
                    View
                </CardButton>
                <CardButton
                    size="small"
                    startIcon={<Delete />}
                    onClick={onDelete}
                    variant="outlined"
                    color="error"
                >
                    Delete
                </CardButton>
            </StyledCardActions>
        </StyledCard>
    );
};

export default NoteCard;
