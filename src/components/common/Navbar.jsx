import { AppBar, Box, Container, Toolbar } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                {/* <Container maxWidth='xl'> */}
                <Toolbar disableGutters>
                    <Box component='img' src='logo.jpg' className='h-14 w-14' />
                </Toolbar>
                {/* </Container> */}
            </AppBar>
        </>
    )
}

export default Navbar
