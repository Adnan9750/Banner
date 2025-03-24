import { Box, Button, Container, Grid2, Paper, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProfileData } from '../components/common/ProfileData'

const Dashboard = () => {
    return (
        <>
            <Container>
                {/* <img src='/banner.jpg' /> */}
                <Box component='img' src='banner.jpg' />
                <Box sx={{ padding: '32px 24px' }}>
                    <Grid2 container spacing={4}>
                        {
                            ProfileData?.map((profile, index) => (
                                <Grid2 key={index} item size={{ xs: 12, sm: 6, md: 3 }}>
                                    {/* <Link to='/aluminium-doosletter'> */}
                                    <Paper sx={{
                                        display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center',
                                        alignItems: 'center', paddingY: 2,
                                        '&:hover': {
                                            border: '1px solid #B91C1C', // Border on hover
                                        },
                                    }}
                                    >
                                        <Box component='img' src={profile.image} className='h-[200px]' />
                                        <Typography variant='body1' color='#B91C1C'>{profile.name}</Typography>
                                        <Link to={profile.link}>
                                            <Button variant='contained'>
                                                BESTEL
                                            </Button>
                                        </Link>
                                    </Paper>
                                    {/* </Link> */}
                                </Grid2>
                            ))
                        }

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
