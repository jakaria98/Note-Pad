import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { Add, Logout } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import api from '../api';

// Import styled components
import {
    StyledContainer,
    HeaderBox,
    TitleText,
    CreateButton,
    EmptyStateBox,
    EmptyStateText,
    LogoutButton,
} from '../components/Styles/HomeStyle';

// Import components
import NoteCard from '../components/Notes/NoteCard';
import CreateNoteModal from '../components/Notes/CreateModal';
import ViewNoteModal from '../components/Notes/ViewModal';

const Home = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [viewModalOpen, setViewModalOpen] = useState(false);

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            console.log('🔄 Fetching notes...');
            const response = await api.get('/api/notes/');
            console.log('✅ Notes fetched successfully:', response.data);
            setNotes(response.data);
        } catch (error) {
            console.error('❌ Error fetching notes:', error);
            console.error('❌ Error response:', error.response);
        }
    };

    const handleLogout = () => {
        console.log('🚪 Logging out...');
        localStorage.clear();
        navigate('/login');
    };

    const deleteNote = async (id) => {
        try {
            console.log('🗑️ Deleting note ID:', id);
            await api.delete(`/api/notes/${id}/`);
            console.log('✅ Note deleted successfully');
            getNotes();
        } catch (error) {
            console.error('❌ Error deleting note:', error);
            console.error('❌ Error response:', error.response);
        }
    };

    const createNote = async (noteData) => {
        try {
            console.log('📝 Creating note:', noteData);
            await api.post('/api/notes/', noteData);
            console.log('✅ Note created successfully');
            setCreateModalOpen(false);
            getNotes();
        } catch (error) {
            console.error('❌ Error creating note:', error);
            console.error('❌ Error response:', error.response);
        }
    };

    const updateNote = async (id, noteData) => {
        try {
            console.log('✏️ Updating note ID:', id, 'with data:', noteData);
            await api.put(`/api/notes/${id}/`, noteData);
            console.log('✅ Note updated successfully');
            setViewModalOpen(false);
            setSelectedNote(null);
            getNotes();
        } catch (error) {
            console.error('❌ Error updating note:', error);
            console.error('❌ Error response:', error.response);
        }
    };

    const handleViewNote = (note) => {
        setSelectedNote(note);
        setViewModalOpen(true);
    };

    const handleDeleteNote = (note) => {
        if (window.confirm('Are you sure you want to delete this note?')) {
            deleteNote(note.id);
        }
    };

    return (
        <StyledContainer maxWidth="lg">
            {/* Header */}
            <HeaderBox>
                <TitleText variant="h3" component="h1">
                    My Notes
                </TitleText>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <CreateButton
                        variant="contained"
                        startIcon={<Add />}
                        onClick={() => setCreateModalOpen(true)}
                    >
                        Create Note
                    </CreateButton>
                    <LogoutButton
                        variant="outlined"
                        startIcon={<Logout />}
                        onClick={handleLogout}
                        color="error"
                    >
                        Logout
                    </LogoutButton>
                </div>
            </HeaderBox>

            {/* Notes Grid */}
            {notes.length === 0 ? (
                <EmptyStateBox>
                    <EmptyStateText variant="h6">
                        No notes yet. Create your first note!
                    </EmptyStateText>
                </EmptyStateBox>
            ) : (
                <Grid container spacing={3}>
                    {notes.map((note) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={note.id}>
                            <NoteCard
                                note={note}
                                onView={() => handleViewNote(note)}
                                onDelete={() => handleDeleteNote(note)}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}

            {/* Modals */}
            <CreateNoteModal
                open={createModalOpen}
                onClose={() => setCreateModalOpen(false)}
                onSubmit={createNote}
            />

            <ViewNoteModal
                open={viewModalOpen}
                onClose={() => {
                    setViewModalOpen(false);
                    setSelectedNote(null);
                }}
                note={selectedNote}
                onUpdate={updateNote}
                onDelete={deleteNote}
            />
        </StyledContainer>
    );
};

export default Home;
