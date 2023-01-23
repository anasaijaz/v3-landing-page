import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Logo from '../../assets/svg/Logo.svg'



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
                       src={Logo}
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
