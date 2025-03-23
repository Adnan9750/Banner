import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Box, Button, Chip, Container, FormControl, Grid2, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { color } from '../utils/Colors';
import { useDispatch } from 'react-redux';
import { postAluminiumDoorsletter } from '../redux/aluminiumDoosletterSlice';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import API from '../API';

const AluminiumDoosletter = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [showInput, setShowInput] = useState(false)
    const [selections, setSelections] = useState({
        thickness_pricing: null,
        width_of_letter: null,
        mounting: null,
        assembly: null,
        target_length: null,
        target_height: null,
        file: null,
        colors: []
    });
    const [totalPrice, setTotalPrice] = useState('')

    const breadcrumbItems = [
        { text: "Home", href: '/' },
        { text: "Aluminium Doosletter" },
    ];

    const handleSelection = (category, value) => {
        setSelections((prevSelections) => ({
            ...prevSelections,
            [category]: value,
        }));
    };

    const handleCustomWidth = (event) => {
        const { name, value } = event.target
        setSelections((prevSelections) => ({
            ...prevSelections,
            [name]: value,
        }));
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        if (name === 'file') {
            const selectFile = event.target.files[0];
            setSelections((prevSelections) => ({
                ...prevSelections,
                file: selectFile,
            }));
        } else {
            setSelections((prevSelections) => ({
                ...prevSelections,
                [name]: value,
            }));
        }
    }

    const handleColorChange = (event, newValue) => {
        if (newValue.length <= 4) {
            const ralValues = newValue.map(option => option.RAL);
            setSelections((prevSelections) => ({
                ...prevSelections,
                colors: ralValues,
            }));
        }
    };


    const handleOrder = async () => {
        try {
            const formdata = new FormData();

            formdata.append('target_length', selections.target_length);
            formdata.append('target_height', selections.target_height);
            formdata.append('file', selections.file);
            formdata.append('profile', 'Aluminium Doosletter');

            const dataObj = {
                thickness_pricing: selections.thickness_pricing,
                width_of_letter: selections.width_of_letter,
                mounting: selections.mounting,
                assembly: selections.assembly,
                colors: selections.colors
            };

            formdata.append('data', JSON.stringify(dataObj));
            const response = await dispatch(postAluminiumDoorsletter({ data: formdata })).unwrap()
            if (response?.data) {
                Cookies.set("orderId", response?.data?.order_id);
                Cookies.set("totalPrice", response?.data?.data?.totalPrice);
            }
            navigate('/userInfo')

        } catch (error) {

        }
    }

    const handlePredictTotal = async () => {
        try {
            const formdata = new FormData();

            formdata.append('target_length', selections.target_length);
            formdata.append('target_height', selections.target_height);
            formdata.append('file', selections.file);
            formdata.append('profile', 'Aluminium Doosletter');

            const dataObj = {
                thickness_pricing: selections.thickness_pricing,
                width_of_letter: selections.width_of_letter,
                mounting: selections.mounting,
                assembly: selections.assembly,
                colors: selections.colors
            };

            formdata.append('data', JSON.stringify(dataObj));

            const response = await API.post('/get-price/', formdata)
            if (response?.data) {
                setTotalPrice(response?.data?.data)
            }
            console.log("Predict response:", response);
        } catch (error) {

        }
    }

    return (
        <>
            <Container>
                <Box sx={{ mb: 2, pl: 2 }}>
                    <Breadcrumb items={breadcrumbItems} title={''} />
                </Box>

                <Box>
                    <Grid2 container spacing={3} justifyContent='center'>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>DIKTE Aluminium</Typography>
                                    {
                                        selections.thickness_pricing &&
                                        <Typography flex={1} variant='body1'>{selections.thickness_pricing}mm</Typography>
                                    }
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid2 container spacing={2}>
                                        {[3, 5, 8, 10].map((thickness) => (
                                            <Grid2 item size={{ xs: 12, md: 4 }} key={thickness}>
                                                <Box
                                                    sx={{
                                                        paddingY: 2,
                                                        border: selections.thickness_pricing === thickness ? '1px solid #B91C1C' : '1px solid #cbd5e1',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => handleSelection('thickness_pricing', thickness)}
                                                >
                                                    <Typography variant='body1'>{thickness}mm</Typography>
                                                </Box>
                                            </Grid2>
                                        ))}
                                    </Grid2>
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>Breedte letters</Typography>
                                    {
                                        selections.width_of_letter &&
                                        <Typography flex={1} variant='body1'>{selections.width_of_letter}cm</Typography>
                                    }
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid2 container spacing={2} alignItems="center">
                                        {[4, 6, 8].map((width) => (
                                            <Grid2 item size={{ xs: 12, md: 4 }} key={width}>
                                                <Box
                                                    sx={{
                                                        paddingY: 2,
                                                        border: selections.width_of_letter === width ? '1px solid #B91C1C' : '1px solid #cbd5e1',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => handleSelection('width_of_letter', width)}
                                                >
                                                    <Typography variant='body1'>{width}cm</Typography>
                                                </Box>
                                            </Grid2>
                                        ))}

                                        <Grid2 item size={12}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                {
                                                    showInput &&
                                                    <TextField
                                                        name='width_of_letter'
                                                        value={selections.width_of_letter}
                                                        placeholder='Enter custom width'
                                                        sx={{ width: '344px' }}
                                                        onChange={handleCustomWidth}
                                                    />
                                                }
                                                {
                                                    showInput ? (
                                                        <Box flex={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                                                            <Button variant='contained' onClick={() => setShowInput(false)}>Cancel</Button>
                                                        </Box>
                                                    ) : (
                                                        <Box flex={1} sx={{ display: 'flex', justifyContent: 'end' }}>
                                                            <Button variant='contained' onClick={() => setShowInput(true)}>Add Width</Button>
                                                        </Box>
                                                    )
                                                }
                                            </Box>
                                        </Grid2>

                                    </Grid2>
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>KLEUR KEUZE</Typography>
                                    {
                                        selections.colors && selections.colors.map((currColor) => (
                                            <Typography flex={1} variant='body1'>{currColor}</Typography>
                                        ))
                                    }
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Autocomplete
                                        multiple
                                        options={color} // Assuming color is an array of objects like { RAL, Dutch, HEX }
                                        getOptionLabel={(option) => `${option?.RAL} - ${option?.Dutch}`}
                                        value={color.filter(option => selections.colors.includes(option.RAL))}
                                        onChange={handleColorChange}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Select Colors (1-4)"
                                                placeholder="Choose colors"
                                            />
                                        )}
                                        renderOption={(props, option, { selected }) => (
                                            <Box
                                                component="li"
                                                sx={{
                                                    display: 'flex', alignItems: 'center', gap: 1,
                                                    backgroundColor: selected ? 'red' : 'inherit',
                                                }}
                                                {...props}
                                            >
                                                <Box
                                                    sx={{
                                                        width: 20,
                                                        height: 20,
                                                        backgroundColor: option.HEX,
                                                        border: '1px solid #ccc',
                                                        borderRadius: '4px',
                                                    }}
                                                />
                                                <Typography>
                                                    {option.RAL} - {option.Dutch}
                                                </Typography>
                                            </Box>
                                        )}
                                        renderTags={(value, getTagProps) =>
                                            value.map((option, index) => (
                                                <Chip
                                                    key={option.RAL}
                                                    label={`${option.RAL} - ${option.Dutch}`}
                                                    {...getTagProps({ index })}
                                                />
                                            ))
                                        }
                                        isOptionEqualToValue={(option, value) => option.RAL === value.RAL}
                                        disableCloseOnSelect
                                        limitTags={4}
                                        filterSelectedOptions
                                    />
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>MONTAGE KEUZE</Typography>
                                    {
                                        selections.mounting &&
                                        <Typography flex={1} variant='body1'>{selections.mounting}</Typography>
                                    }
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid2 container spacing={2}>
                                        {['afstand houders', 'PVC BOVEM', 'draadsti ften', 'geen'].map((mounting) => (
                                            <Grid2 item size={{ xs: 12, md: 4 }} key={mounting}>
                                                <Box
                                                    sx={{
                                                        paddingY: 2,
                                                        border: selections.mounting === mounting ? '1px solid #B91C1C' : '1px solid #cbd5e1',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => handleSelection('mounting', mounting)}
                                                >
                                                    <Typography variant='body1'>{mounting}</Typography>
                                                </Box>
                                            </Grid2>
                                        ))}
                                    </Grid2>
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>MONTAGE sjabloon</Typography>
                                    {
                                        selections.assembly &&
                                        <Typography flex={1} variant='body1'>{selections.assembly}</Typography>
                                    }
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid2 container spacing={2}>
                                        {['NEE', 'sticker', 'karton', 'PVC'].map((assembly) => (
                                            <Grid2 item size={{ xs: 12, md: 4 }} key={assembly}>
                                                <Box
                                                    sx={{
                                                        paddingY: 2,
                                                        border: selections.assembly === assembly ? '1px solid #B91C1C' : '1px solid #cbd5e1',
                                                        borderRadius: '4px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        cursor: 'pointer',
                                                    }}
                                                    onClick={() => handleSelection('assembly', assembly)}
                                                >
                                                    <Typography variant='body1'>{assembly}</Typography>
                                                </Box>
                                            </Grid2>
                                        ))}
                                    </Grid2>
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        <Grid2 item size={10}>

                            <Accordion sx={{ border: '1px solid #B91C1C', boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    <Typography flex={1} variant='body1'>Other Details</Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid2 container spacing={2}>
                                        <Grid2 item size={{ xs: 12, md: 4 }}>
                                            <TextField
                                                fullWidth
                                                name='target_length'
                                                placeholder='Enter length'
                                                onChange={handleInputChange}
                                            />
                                        </Grid2>

                                        <Grid2 item size={{ xs: 12, md: 4 }}>
                                            <TextField
                                                fullWidth
                                                name='target_height'
                                                placeholder='Enter height'
                                                onChange={handleInputChange}
                                            />
                                        </Grid2>

                                        <Grid2 item size={{ xs: 12, md: 4 }}>
                                            <TextField
                                                fullWidth
                                                name='file'
                                                type='file'
                                                onChange={handleInputChange}
                                            />
                                        </Grid2>
                                    </Grid2>
                                </AccordionDetails>
                            </Accordion>

                        </Grid2>

                        {
                            totalPrice &&
                            <Grid2 item size={10}>
                                <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
                                    <Typography variant='body1'>Total Price</Typography>
                                    <Typography variant='body1'>{totalPrice}</Typography>
                                </Box>
                            </Grid2>
                        }

                        <Grid2 item size={10} justifyContent='end'>
                            <Box sx={{ display: 'flex', justifyContent: 'end', gap: 2 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant='outlined' onClick={handlePredictTotal}>
                                        Predict Price
                                    </Button>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button onClick={handleOrder} variant='contained'>
                                        Order Now
                                    </Button>
                                </Box>
                            </Box>
                        </Grid2>

                    </Grid2>
                </Box>
            </Container>

        </>
    )
}

export default AluminiumDoosletter
