import { useState, useEffect } from 'react';
import api from '../api';

const Home = () => {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getNotes();
    }, []);
    const getNotes = async () => {
        try {
            const response = await api.get('/api/notes/');
            setNotes(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const deleteNote = async (id) => {
        try {
            await api
                .delete(`/api/notes/${id}/`)
                .then(() => {
                    if (res.status === 204) console.log('Note deleted successfully');
                    else console.log('Failed to delete note');
                })
                .catch((error) => {
                    console.error('Error deleting note:', error);
                });
            getNotes();
        } catch (error) {
            console.error('Error deleting note:', error);
        }
    };

    const createNote = async (e) => {
        e.preventDefault();
        try {
            await api
                .post('/api/notes/', {
                    title: title,
                    content: content,
                })
                .then((res) => {
                    if (res.status === 201) console.log('Note created successfully');
                    else console.log('Failed to create note');
                })
                .catch((error) => {
                    console.error('Error creating note:', error);
                });
            setTitle('');
            setContent('');
            getNotes();
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };
    return (
        <div>
            <div>
                <h2>Notes</h2>
            </div>
            <div>
                <h2>Create Note</h2>
                <form onSubmit={createNote}>
                    <label htmlFor="title"> Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <br />
                    <label htmlFor="content"> Content</label>
                    <textarea
                        placeholder="Content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                    <br />
                    <button type="submit" value="Submit">
                        Create Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Home;
