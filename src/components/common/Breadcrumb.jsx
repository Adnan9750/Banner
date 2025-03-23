import React from "react";
import { Box, Breadcrumbs, Button, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Add } from "@mui/icons-material";

function Breadcrumb({
    items,
    title,
    children,
    id,

    //   setValue,
}) {
    return (
        <Box sx={{}}>
            <Breadcrumbs aria-label="breadcrumb">
                {items.map((item, index) => {
                    if (index === items.length - 1) {
                        return (
                            <Typography
                                // variant="h5"
                                key={item.text}
                                // color="text.primary"
                                sx={{
                                    color: "text.black",
                                    fontWeight: 500,
                                    // fontSize: "0.85rem",
                                    pt: 0.2,
                                }}
                            >
                                {item.text}
                            </Typography>
                        );
                    }
                    return (
                        <Link
                            component={RouterLink}
                            to={item.href}
                            key={item.text}
                            //   onClick={() => (setValue ? setValue(0) : "")}
                            underline="hover"
                            sx={{
                                color: "text.primary",
                                fontWeight: 500,
                                fontSize: "0.85rem",
                                "&:hover": {
                                    color: "text.link",
                                },
                            }}
                        >
                            {item.text}
                        </Link>
                    );
                })}
            </Breadcrumbs>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        pt: 0.5,
                        color: "text.black",
                        // fontSize: "1.41rem",
                        fontWeight: 600,
                        textTransform: "capitalize",
                    }}
                >
                    {title}
                    {id ? ` #${id}` : ""}
                </Typography>

                {children && children}
            </Box>
        </Box>
    );
}

export default Breadcrumb;