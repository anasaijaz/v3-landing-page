import React from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Appbar from "../../shared/Appbar/Appbar";

const Home = () => {
    return (
        <Container maxWidth='lg'>
            <Appbar/>
            <Box sx={{
                marginTop: 15
            }}/>
            <Box>
                <Grid container>
                    <Grid item xs={7}>
                        <Typography pb={2} paragraph variant='titleText' fontWeight={700}>
                            Elevate your crypto game.
                        </Typography>

                        <Typography pb={5} color='textSecondary' variant='h5'>
                            Your decentralized hub for tading, investing, and everything crypto.
                        </Typography>

                        <Button sx={{
                            mr: 2
                        }} variant='contained' size='large'>
                           Join
                        </Button>

                        <Button variant='outlined' size='large'>
                            Learn more
                        </Button>
                    </Grid>
                    <Grid item xs={5}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Home;
