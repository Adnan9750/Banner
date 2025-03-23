import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

const Layout = () => {
    return (
        <>
            <Box sx={{ display: 'flex', overflow: 'hidden', width: '100vw', height: '100vh' }}>
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <Navbar />
                    <Box sx={{ flex: 1, p: 2, overflow: 'auto' }}>
                        <Outlet />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Layout
