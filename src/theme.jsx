import { createTheme } from "@mui/material";


const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    padding: '8px 32px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "4px", // Button border radius
                    textTransform: "capitalize", // Force uppercase text
                    padding: "8px 16px", // Default padding
                    fontWeight: 500, // Medium weight
                    backgroundColor:'#B91C1C',
                    color:'#fff'
                },
                containedPrimary: {
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)", // Shadow for primary buttons
                    "&:hover": {
                        backgroundColor: "#B91C1C", // Hover state for primary buttons
                    },
                },
                containedSecondary: {
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.15)", // Shadow for secondary buttons
                    "&:hover": {
                        backgroundColor: "#B91C1C", // Hover state for secondary buttons
                    },
                },
                outlined: {
                    borderColor: "#B91C1C", // Default outline color
                    "&:hover": {
                        borderColor: "#B91C1C", // Primary color for hover outline
                    },
                },
            },
        },
    },
})

export default theme;