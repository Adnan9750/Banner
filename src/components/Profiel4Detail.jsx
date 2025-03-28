import { Box, Button, Container, Divider, Grid2, Rating, Typography } from '@mui/material'
import React from 'react'
import { Add, Remove } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Breadcrumb from './common/Breadcrumb';

const Profiel4Detail = () => {

    const breadcrumbItems = [
        { text: "Home", href: '/' },
        { text: "Profiel 4 Detail" },
    ];

    return (
        <>
            <Container>

                <Box sx={{ mb: 2, pl: 2 }}>
                    <Breadcrumb items={breadcrumbItems} title={''} />
                </Box>

                <Grid2 container spacing={2}>

                    <Grid2 item size={{ xs: 12, md: 6 }}>
                        <Box component='img' src='/profile4.jpg' className='h-[75vh]' />
                    </Grid2>

                    <Grid2 item size={{ xs: 12, md: 6 }}>
                        <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Typography variant='h5' fontWeight={600}>Profiel 4</Typography>

                            <Rating
                                name="simple-controlled"
                                value='4'
                            />

                            <Divider sx={{ paddingRight: 4 }} />

                            <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
                                <Box>
                                    <Typography variant='body1' fontWeight={500}><b>Description:</b><br />
Aluminium gelaste doosletter, gespoten in een 2 componenten lak in elke gewenste RAL-kleur en voorzien van een 19mm translucent bodem (steekt 5-15 mm uit). Letters lichten aan de achterzijde uit, maar ook deels aan de zijkant.

Algemene informatie profiel 3 deluxe met LED-verlichting
– Reliëf	30, 50, 80, 100 of 120mm
– Minimale x-hoogte	150mm
– Minimale stokbreedte	20mm
– Levertijd	ca. 3 weken
– Garantie	2 jaar
– Lakwerk binnenzijde	mat wit
– Lakwerk buitenzijde	elke gewenste Ral-kleur</Typography>
                                </Box>

                                {/* <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                    <Typography variant='body1' fontWeight={500}>Choose quantity</Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, border: '1px solid black', padding: 1, borderRadius: '4px' }}>
                                        <Remove fontSize='small' />
                                        <Typography>1</Typography>
                                        <Add fontSize='small' />
                                    </Box>
                                </Box> */}

                                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                                    <Link to='/profiel4'>
                                        <Button variant='contained' sx={{ bgcolor: 'black' }}>Bestel</Button>
                                    </Link>
                                    {/* <Button variant='contained' sx={{ bgcolor: 'black' }}>Add To Whishlist</Button> */}
                                </Box>
                            </Box>


                        </Box>
                    </Grid2>

                </Grid2>

            </Container>
        </>
    )
}

export default Profiel4Detail
