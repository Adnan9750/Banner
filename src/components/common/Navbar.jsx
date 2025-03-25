import { ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logo from '../../../public/Logo1Fina.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
        const navigate = useNavigate();
    return (
        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box onClick={()=> navigate('/')} component='img' src={logo} className='h-14 w-18' />
                        <Box sx={{ display: 'flex', gap: 4 }}>
                            <Typography variant="body1" sx={{ color: 'black' }}>Home</Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>Product</Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>Shop</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
                            <Button variant='contained' onClick={() => navigate('/SignUp')} sx={{ bgcolor: 'black' }}>Sign Up</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar
