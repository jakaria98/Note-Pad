import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

function ProtectedRoute({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const auth = async () => {
            try {
                const accessToken = localStorage.getItem(ACCESS_TOKEN);

                if (!accessToken) {
                    if (isMounted) setIsAuthenticated(false);
                    return;
                }

                const decodedToken = jwtDecode(accessToken);
                const currentTime = Date.now() / 1000;

                if (decodedToken.exp < currentTime) {
                    // Token expired, try to refresh
                    await refreshToken(isMounted);
                } else {
                    // Token is valid
                    if (isMounted) setIsAuthenticated(true);
                }
            } catch (error) {
                console.error('Auth error:', error);
                if (isMounted) setIsAuthenticated(false);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        const refreshToken = async (isMounted) => {
            try {
                const refreshToken = localStorage.getItem(REFRESH_TOKEN);

                if (!refreshToken) {
                    if (isMounted) setIsAuthenticated(false);
                    return false;
                }

                const response = await api.post('/api/token/refresh/', {
                    refresh: refreshToken,
                });

                if (response.status === 200) {
                    localStorage.setItem(ACCESS_TOKEN, response.data.access);
                    if (isMounted) setIsAuthenticated(true);
                    return true;
                } else {
                    if (isMounted) setIsAuthenticated(false);
                    return false;
                }
            } catch (error) {
                console.error('Token refresh error:', error);
                // Clear invalid tokens
                localStorage.removeItem(ACCESS_TOKEN);
                localStorage.removeItem(REFRESH_TOKEN);
                if (isMounted) setIsAuthenticated(false);
                return false;
            }
        };

        auth();

        return () => {
            isMounted = false; // Cleanup to prevent state updates on unmounted component
        };
    }, []);

    // Show loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div>Loading...</div>
            </div>
        );
    }

    // Redirect if not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Render protected content
    return children ? children : <Outlet />;
}

export default ProtectedRoute;
