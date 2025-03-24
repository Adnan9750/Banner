import { ShoppingCartOutlined } from '@mui/icons-material'
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth='xl'>
                    <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Box component='img' src='logo.jpg' className='h-14 w-14' />
                        <Box sx={{ display: 'flex',alignItems:'center',gap:3 }}>
                            <ShoppingCartOutlinedIcon sx={{color:'black'}} />
                            <Button variant='contained' sx={{ bgcolor: 'black' }}>Get Solution</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar
