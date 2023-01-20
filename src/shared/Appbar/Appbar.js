import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";



// Appbar links
const links = [
    {
        label: 'Swap',
        to: ''
    },
    {
        label: 'Projects',
        to: ''
    },
    {
        label: 'FSmartClub',
        to: ''
    },
    {
        label: 'Shop',
        to: ''
    },
]


const Appbar = () => {
    return (
            <AppBar
                position='static' sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                backgroundImage: 'none'
            }}>
                <Toolbar
                >
                    <Box
                    sx={{
                        flexGrow: 2,
                        my: 2
                    }}>
                   <img
                       src='data:image/jpeg;base64,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'
                       height='48px'/>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1
                        }}
                        display='flex'
                        gap={2.5}
                    >
                        {
                            links.map(link => <Typography color='textPrimary' variant='subtitle1'>
                                {
                                    link.label
                                }
                            </Typography>)
                        }
                    </Box>

                    <Box>
                        <Button size='large' variant='contained'>
                            Connect Wallet
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
    );
};

export default Appbar;
