import React, { useState } from 'react';
import './LoginPage.css'; // Import your CSS file for styling

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with:', { username, password });
    };

    return (
        <div className="login-container">
            <div className="video-container">
                {/* Video Player */}
                <iframe
                    width="100%"
                    height="100%"
                    src="https://twitter.com/emergingtechAF/status/1762124653466669271/photo/1"
                    title="Embedded Video Player"
                    allow="autoplay; encrypted-media"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="login-overlay">
                <div className="login-details">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
