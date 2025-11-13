import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Switch } from '@mui/material';
import api from '../api';

// Import styled components
import {
    StyledContainer,
    StyledPaper,
    HeaderText,
    SwitchText,
    SwitchButton,
    StyledForm,
    StyledTextField,
    SubmitButton,
    ErrorAlert,
    ToggleFormControlLabel,
} from './Styles/Form/AuthFormStyle.jsx';

const Form = ({ method = 'login' }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [isLogin, setIsLogin] = useState(method === 'login'); // Fixed: use method prop
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            let response;

            if (isLogin) {
                // Login API call
                response = await api.post('/api/token/', {
                    username: formData.username,
                    password: formData.password,
                });

                localStorage.setItem('ACCESS_TOKEN', response.data.access);
                localStorage.setItem('REFRESH_TOKEN', response.data.refresh);

                const from = location.state?.from || '/';
                navigate(from, { replace: true });
            } else {
                // Register API call
                response = await api.post('/api/register/', {
                    username: formData.username,
                    password: formData.password,
                });

                navigate('/login', { replace: true });
            }
        } catch (error) {
            setError(
                error.response?.data?.message ||
                    error.response?.data?.detail ||
                    `Failed to ${isLogin ? 'login' : 'register'}`
            );
        } finally {
            setLoading(false);
        }
    };

    const toggleMode = () => {
        const newMode = isLogin ? 'register' : 'login';
        setIsLogin(!isLogin);
        setError('');
        setFormData({ username: '', password: '' });

        // Use absolute path with leading slash
        navigate(`/${newMode}`, { replace: true });
    };

    return (
        <StyledContainer component="main" maxWidth="xs">
            <StyledPaper elevation={3}>
                {/* Header */}
                <HeaderText component="h1" variant="h4">
                    {isLogin ? 'Sign In' : 'Sign Up'}
                </HeaderText>

                {/* Switch Text */}
                <SwitchText variant="body2">
                    {isLogin ? "Don't have an account? " : 'Already have an account? '}
                    <SwitchButton onClick={toggleMode}>
                        {isLogin ? 'Sign up' : 'Sign in'}
                    </SwitchButton>
                </SwitchText>

                {/* Optional: Toggle Switch */}
                <ToggleFormControlLabel
                    control={<Switch checked={!isLogin} onChange={toggleMode} color="primary" />}
                    label={isLogin ? 'Switch to Sign Up' : 'Switch to Sign In'}
                />

                {/* Error Alert */}
                {error && <ErrorAlert severity="error">{error}</ErrorAlert>}

                {/* Form */}
                <StyledForm component="form" onSubmit={handleSubmit}>
                    <StyledTextField
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={formData.username}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    <StyledTextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete={isLogin ? 'current-password' : 'new-password'}
                        value={formData.password}
                        onChange={handleChange}
                        disabled={loading}
                    />
                    <SubmitButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={loading || !formData.username || !formData.password}
                    >
                        {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
                    </SubmitButton>
                </StyledForm>
            </StyledPaper>
        </StyledContainer>
    );
};

export default Form;
