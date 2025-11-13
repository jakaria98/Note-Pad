// components/NotFoundPage.jsx
import React from 'react';
import { Home, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Import styled components
import {
    StyledContainer,
    ErrorCodeText,
    TitleText,
    DescriptionText,
    ButtonContainer,
    StyledButton,
    DecorativeElement,
} from '../components/Styles/NotFound/NotFoundStyles';

const NotFoundPage = () => {
    const navigate = useNavigate();

    // Check if user is authenticated
    const isAuthenticated = () => {
        const token = localStorage.getItem('ACCESS_TOKEN');
        return !!token; // Returns true if token exists
    };

    // Handle navigation with auth check
    const handleNavigation = (targetPath) => {
        if (isAuthenticated()) {
            navigate(targetPath);
        } else {
            navigate('/login'); // Redirect to login if not authenticated
        }
    };

    // Handle go back with auth check
    const handleGoBack = () => {
        if (isAuthenticated()) {
            navigate(-1); // Go back in history
        } else {
            navigate('/login'); // Redirect to login if not authenticated
        }
    };

    return (
        <StyledContainer component="main" maxWidth="md">
            {/* Error Code */}
            <ErrorCodeText variant="h1" component="h1">
                404
            </ErrorCodeText>

            {/* Title */}
            <TitleText variant="h4" component="h2" gutterBottom>
                Oops! Page Not Found
            </TitleText>

            {/* Description */}
            <DescriptionText variant="h6" color="text.secondary">
                {isAuthenticated()
                    ? "The page you're looking for doesn't exist or has been moved. Let's get you back on track."
                    : 'Please log in to access this page.'}
            </DescriptionText>

            {/* Action Buttons */}
            <ButtonContainer>
                <StyledButton
                    variant="contained"
                    size="large"
                    startIcon={<ArrowBack />}
                    onClick={handleGoBack}
                >
                    {isAuthenticated() ? 'Go Back' : 'Go to Login'}
                </StyledButton>

                <StyledButton
                    variant="outlined"
                    size="large"
                    startIcon={<Home />}
                    onClick={() => handleNavigation('/')}
                >
                    {isAuthenticated() ? 'Home Page' : 'Login Page'}
                </StyledButton>
            </ButtonContainer>

            {/* Decorative Element */}
            <DecorativeElement />
        </StyledContainer>
    );
};

export default NotFoundPage;
