import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import CSS for styling

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Replace this with your authentication logic
        if (username === 'Apoorv.PrakashGupta@insightsoftware.com' && password === 'password') {
            // If authentication succeeds, navigate to the next route
            navigate('/Updates');
        } else {
            // If authentication fails, display an error message
            setError('Username or password is incorrect');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="left-section">
                    <img src={require('.//iswlogo.jpg')} alt="Logo" />
                </div>
                <div className="right-section">
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="btn btn-primary btn-block">Login</button>
                    </form>
                    <div className="signup-link">
                        <p>New user? <a href="#">Signup</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;