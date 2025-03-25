import { Alert, Box, Button, Container, Grid, InputLabel, Paper, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../API';

const SignUp = () => {
    const navigate = useNavigate();
    const [userForm, setUserForm] = useState({
        firstname: '',
        lastname: '',
        companyname: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });
    const [message, setMessage] = useState('');
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async () => {
        try {
            const response = await API.post('/create-user/', userForm);
            if (response?.data?.success) {
                setMessage('User created successfully!');
                setSnackbarOpen(true);
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (error) {
            console.error('Sign-up error:', error);
        }
    };

    const formatLabel = (fieldName) => {
        // Add space before capital letters and capitalize first letter
        return fieldName
            .replace(/([A-Z])/g, ' $1')
            .replace(/(name)/gi, ' $1')
            .replace(/^./, str => str.toUpperCase())
            .trim();
    };

    return (
        <Container>
            <Box sx={{ mb: 2, pl: 2 }}>
                <Typography variant='h4' fontWeight={600}>Sign Up</Typography>
            </Box>
            <Grid container justifyContent='center'>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ padding: 3 }}>
                        <Grid container spacing={3}>
                            {Object.keys(userForm).map((field) => (
                                <Grid item 
                                    xs={12} 
                                    md={field === 'address' ? 12 : 6} 
                                    key={field}
                                >
                                    <InputLabel>{formatLabel(field)}</InputLabel>
                                    <TextField
                                        fullWidth
                                        name={field}
                                        value={userForm[field]}
                                        onChange={handleInputChange}
                                        placeholder={`Enter your ${formatLabel(field)}`}
                                    />
                                </Grid>
                            ))}
                            <Grid item xs={12}>
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'flex-end',
                                    mt: 2
                                }}>
                                    <Button 
                                        onClick={handleSignUp} 
                                        variant='contained'
                                        size='large'
                                    >
                                        Create Account
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)}>
                <Alert severity='success'>{message}</Alert>
            </Snackbar>
        </Container>
    );
};

export default SignUp;