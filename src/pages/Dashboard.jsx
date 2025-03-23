import { Box, Container, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <>
            <Container>
                {/* <img src='/banner.jpg' /> */}
                <Box component='img' src='banner.jpg' />
                <Box sx={{ padding: '32px 24px' }}>
                    <Grid2 container spacing={4}>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/aluminium-doosletter'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/aluminium.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Aluminium Doosletter</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel2'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile2.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 2</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel3'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C',
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile3.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 3</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel3Lux'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile3LUX.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 3Lux</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel4'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile4.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 4</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel5'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile5.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 5</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/profiel5Lux'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/profile5LUX.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel 5Lux</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        {/* <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/aluminium-doosletter'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/aluminium.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel L1</Typography>
                                </Paper>
                            </Link>
                        </Grid2>

                        <Grid2 item size={{ xs: 12, sm: 6, md: 3 }}>
                            <Link to='/aluminium-doosletter'>
                                <Paper sx={{
                                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                                    alignItems: 'center', paddingY: 2,
                                    '&:hover': {
                                        border: '1px solid #B91C1C', // Border on hover
                                    },
                                }}
                                >
                                    <Box component='img' src='/aluminium.jpg' className='h-[200px]' />
                                    <Typography variant='body1' color='#B91C1C'>Profiel L2</Typography>
                                </Paper>
                            </Link>
                        </Grid2> */}

                    </Grid2>
                </Box>
            </Container>
        </>
    )
}

export default Dashboard
