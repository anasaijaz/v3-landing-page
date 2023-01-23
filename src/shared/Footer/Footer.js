import React from 'react';
import {Box, Button, Grid, Typography} from "@mui/material";
import Logo from '../../assets/svg/Logo.svg'
import Auditor from '../../assets/svg/icons/auditor.svg'

const Footer = () => {
    return (
        <Box py={8}>
            <Grid container>
                <Grid xs={6} item>
                    <Box width='60%'>
                        <img src={Logo} />
                        <Typography paragraph color='textSecondary' variant='body2' fontSize='12px' fontWeight={300}>
                            © 2022 FSX and FS.exchange. By using this service you agree to the Terms of Service and Privacy Policy.
                        </Typography>
                        <Box pb={4} display='flex' gap={2}>
                            <Typography variant='body2'>Privacy</Typography>
                            <Typography variant='body2'>Terms & Conditions</Typography>
                        </Box>
                        <Typography paragraph color='textSecondary' variant='body2' fontSize='12px' fontWeight={300}>
                            AUDITED BY
                        </Typography>

                        <img src={Auditor} width='100px' />
                    </Box>
                </Grid>
                <Grid xs={2} item>
                    <Typography paragraph variant='body1'>
                        Products
                    </Typography>
                    {
                        ["Swap", "Projects", "FSmart Club", "Shop"].map(text =>
                            <Typography gutterBottom color='textSecondary' variant='body2' fontSize='14px' fontWeight={300}>
                            {text}
                        </Typography>)
                    }
                </Grid>
                <Grid xs={2} item>
                    <Typography paragraph variant='body1'>
                        Company
                    </Typography>
                    {
                        ["FAQ", "Litepaper", "Audit", "Scout Program", "Contact", "Contact", "Careers"].map(text =>
                            <Typography gutterBottom color='textSecondary' variant='body2' fontSize='14px' fontWeight={300}>
                                {text}
                            </Typography>)
                    }
                </Grid>
                <Grid xs={2} item>
                    <Typography paragraph variant='body1'>
                        Follow us
                    </Typography>
                    {
                        ["Twitter", "Discord", "Telegram"].map(text =>
                            <Typography gutterBottom color='textSecondary' variant='body2' fontSize='14px' fontWeight={300}>
                                {text}
                            </Typography>)
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
