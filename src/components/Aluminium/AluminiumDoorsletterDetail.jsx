import { Box, Button, Container, Divider, Grid2, Rating, Typography } from '@mui/material'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb';
import { Add, Remove } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AluminiumDoorsletterDetail = () => {

  const breadcrumbItems = [
    { text: "Home", href: '/' },
    { text: "Aluminium Doosletter Detail" },
  ];

  return (
    <>
      <Container>

        <Box sx={{ mb: 2, pl: 2 }}>
          <Breadcrumb items={breadcrumbItems} title={''} />
        </Box>

        <Grid2 container spacing={2}>

          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Box component='img' src='/aluminium.jpg' className='h-[75vh]' />
          </Grid2>

          <Grid2 item size={{ xs: 12, md: 6 }}>
            <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant='h5' fontWeight={600}>Aluminium Doosletter</Typography>

              <Rating
                name="simple-controlled"
                value='5'
              />

              <Divider sx={{ paddingRight: 4 }} />

              <Box sx={{ pt: 4, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Box>
                  <Typography variant='body1' fontWeight={500}>Description</Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Typography variant='body1' fontWeight={500}>Choose quantity</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, border: '1px solid black', padding: 1, borderRadius: '4px' }}>
                    <Remove fontSize='small' />
                    <Typography>1</Typography>
                    <Add fontSize='small' />
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, width: '100%' }}>
                  <Link to='/aluminium-doosletter'>
                    <Button variant='contained' sx={{ bgcolor: 'black' }}>Buy Now</Button>
                  </Link>
                  <Button variant='contained' sx={{ bgcolor: 'black' }}>Add To Whishlist</Button>
                </Box>
              </Box>


            </Box>
          </Grid2>

        </Grid2>

      </Container>
    </>
  )
}

export default AluminiumDoorsletterDetail
