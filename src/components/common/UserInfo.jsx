import { Alert, Box, Button, Container, Divider, Grid, Grid2, InputLabel, ListItemText, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Breadcrumb from './Breadcrumb';
import Cookies from 'js-cookie';
import API from '../../API';

const UserInfo = () => {

    const [orderDetail, setOrderDetail] = useState({})
    const [originalData, setOriginalData] = useState({})
    const [prices, setPrices] = useState([])
    const [totalPrice, setTotalPrice] = useState()
    const [messsage, setMessage] = useState('')
    // const [ope]

    const [loading, setLoading] = useState(false)
    const [userForm, setUserForm] = useState({
        username: '',
        email: '',
        address: '',
        number: ''
    })

    const breadcrumbItems = [
        { text: "Home", href: '/' },
        { text: "UserInfo" },
    ];

    const orderID = Cookies.get("orderId")

    const fetchOrderDetail = async () => {
        setLoading(true)
        try {
            const res = await API.get(`/orders/${orderID}`)

            setOrderDetail(res?.data?.data)
            setOriginalData(res?.data?.data?.original_data)
            setPrices(res?.data?.data?.prices?.prices)
            setTotalPrice(res?.data?.data?.prices?.totalPrice)

        } catch (error) {
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchOrderDetail()
    }, [])

    const handleInputChange = (event) => {
        const { name, value } = event.target

        setUserForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleCheckout = async () => {
        try {
            const data = {
                orderId: orderID,
                ...userForm
            }
            const response = await API.post('/create-user/', data)
            console.log("Place order:", response);
            if (response?.data?.success) {
                setMessage('Order Place Successfully')
            }
            setUserForm({
                username: '',
                email: '',
                address: '',
                number: ''
            })

            setTimeout(() => {
                setMessage('')
            }, 3000)

        } catch (error) {

        }
    }

    return (
        <>
            <Container>
                <Box sx={{ mb: 2, pl: 2 }}>
                    <Breadcrumb items={breadcrumbItems} title={''} />
                </Box>

                <Grid2 container spacing={2} >

                    <Grid2 items size={{ xs: 12, md: 6 }}>
                        <Paper elevation={0} sx={{ padding: 2, border: '1px solid #B91C1C' }}>
                            <Typography variant='h6' fontWeight={600}>Order Detail</Typography>
                            {
                                loading &&
                                <Typography textAlign='center'>loading...</Typography>
                            }
                            {
                                !loading && (
                                    <>
                                        <Grid2 container spacing={2}>
                                            {/* <Grid2 items size={{ xs: 12, md: 6 }}>
                                                <Box>
                                                    <ListItemText primary="" secondary={orderDetail?.profile || '--'}></ListItemText>
                                                </Box>
                                            </Grid2> */}
                                            {
                                                originalData?.thickness_pricing &&
                                                <Grid2 items size={{ xs: 12, md: 4 }}>
                                                    <Box>
                                                        <ListItemText primary="DIKTE Aluminium" secondary={originalData?.thickness_pricing || '--'}></ListItemText>
                                                    </Box>
                                                </Grid2>
                                            }
                                            <Grid2 items size={{ xs: 12, md: 4 }}>
                                                <Box>
                                                    <ListItemText primary="Breedte letters" secondary={originalData?.width_of_letter || '--'}></ListItemText>
                                                </Box>
                                            </Grid2>
                                            {
                                                originalData?.plexi_size &&
                                                <Grid2 items size={{ xs: 12, md: 4 }}>
                                                    <Box>
                                                        <ListItemText primary="Plexi Size" secondary={originalData?.plexi_size || '--'}></ListItemText>
                                                    </Box>
                                                </Grid2>
                                            }
                                            <Grid2 items size={{ xs: 12, md: 4 }}>
                                                <Box>
                                                    <ListItemText primary="Breedte letters" secondary={originalData?.colors?.map((currColor) => currColor) || '--'}></ListItemText>
                                                </Box>
                                            </Grid2>
                                            <Grid2 items size={{ xs: 12, md: 4 }}>
                                                <Box>
                                                    <ListItemText primary="MONTAGE sjabloon" secondary={originalData?.assembly || '--'}></ListItemText>
                                                </Box>
                                            </Grid2>
                                            <Grid2 items size={{ xs: 12, md: 4 }}>
                                                <Box>
                                                    <ListItemText primary="MONTAGE KEUZE" secondary={originalData?.mounting || '--'}></ListItemText>
                                                </Box>
                                            </Grid2>
                                        </Grid2>

                                        <Typography mt={2} variant='h6' fontWeight={600}>Pricing</Typography>

                                        <Grid2 container spacing={2}>
                                            <Grid2 items size={{ xs: 3, md: 3 }}>
                                                Letter
                                            </Grid2>
                                            <Grid2 items size={{ xs: 3, md: 3 }}>
                                                Price
                                            </Grid2>
                                            <Grid2 items size={{ xs: 3, md: 3 }}>
                                                Height
                                            </Grid2>
                                            <Grid2 items size={{ xs: 3, md: 3 }}>
                                                Length
                                            </Grid2>
                                            {
                                                prices?.map((currPrice, index) => (
                                                    <React.Fragment key={index}>
                                                        <Grid2 items size={{ xs: 3, md: 3 }}>
                                                            {currPrice?.letter}
                                                        </Grid2>
                                                        <Grid2 items size={{ xs: 3, md: 3 }}>
                                                            {currPrice?.price}
                                                        </Grid2>
                                                        <Grid2 items size={{ xs: 3, md: 3 }}>
                                                            {currPrice?.scaled_height}
                                                        </Grid2>
                                                        <Grid2 items size={{ xs: 3, md: 3 }}>
                                                            {currPrice?.scaled_length}
                                                        </Grid2>
                                                    </React.Fragment>
                                                ))
                                            }

                                        </Grid2>

                                        <Box sx={{ display: 'flex', gap: 1, justifyContent: 'end', paddingTop: 3, paddingRight: 8 }}>
                                            <Typography variant='body1' fontWeight={600}>Total Price</Typography>
                                            <Typography variant='body1'>{totalPrice || '--'}</Typography>
                                        </Box>
                                    </>
                                )
                            }
                        </Paper>
                    </Grid2>

                    <Grid2 items size={{ xs: 12, md: 6 }}>
                        <Paper elevation='0' sx={{ padding: 2, border: '1px solid #B91C1C' }}>
                            <Grid2 container spacing={2}>
                                <Grid2 items size={12}>
                                    <Typography variant='h6'>User Info</Typography>
                                </Grid2>

                                {
                                    messsage &&
                                    <Alert severity='success'>{messsage}</Alert>
                                }

                                <Grid2 items size={12}>
                                    <Box>
                                        <InputLabel variant='body2'>User Name</InputLabel>
                                        <TextField
                                            fullWidth
                                            name='username'
                                            value={userForm.username}
                                            onChange={handleInputChange}
                                            placeholder='Enter your name'
                                        />
                                    </Box>
                                </Grid2>

                                <Grid2 items size={12}>
                                    <Box>
                                        <InputLabel variant='body2'>Email</InputLabel>
                                        <TextField
                                            fullWidth
                                            name='email'
                                            placeholder='Enter your email'
                                            value={userForm.email}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid2>

                                <Grid2 items size={12}>
                                    <Box>
                                        <InputLabel variant='body2'>Number</InputLabel>
                                        <TextField
                                            fullWidth
                                            name='number'
                                            placeholder='Enter your number'
                                            value={userForm.number}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid2>

                                <Grid2 items size={12}>
                                    <Box>
                                        <InputLabel variant='body2'>Address</InputLabel>
                                        <TextField
                                            fullWidth
                                            name='address'
                                            placeholder='Enter your address'
                                            value={userForm.address}
                                            onChange={handleInputChange}
                                        />
                                    </Box>
                                </Grid2>

                                <Grid2 items size={12}>
                                    <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                        <Button onClick={handleCheckout} variant='contained'>Checkout</Button>
                                    </Box>
                                </Grid2>
                            </Grid2>
                        </Paper>
                    </Grid2>

                </Grid2>
            </Container >
        </>
    )
}

export default UserInfo
