import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import Logo from '../../assets/png/fs-logo.png'
import {Link} from 'react-router-dom'


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
                        flexGrow: 1,
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
                            links.map(link => <Link to={link.to}>
                            <Typography className='link' color='textPrimary' variant='subtitle1'>
                                {
                                    link.label
                                }
                            </Typography>
                            </Link>)
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
