import React from 'react';
import {Box, Button, ButtonGroup, Container, Grid, Typography} from "@mui/material";
import Appbar from "../../shared/Appbar/Appbar";
import Wrapper from "../../shared/Wrapper/Wrapper";
import SwapSVG from '../../assets/svg/icons/swap.svg'
import MoneySVG from '../../assets/svg/icons/money.png'
import ProfileSVG from '../../assets/svg/icons/profile.png'

import EarnPNG from '../../assets/png/earn.png'
import FSmartClubPNG from '../../assets/png/seed.svg'
import SwapPNG from '../../assets/png/swap_content.svg'
import HueBGSVG from '../../assets/svg/hue_bg.svg'

// Sponsors
import A from '../../assets/png/sponsors/1.png'
import B from '../../assets/png/sponsors/2.png'
import C from '../../assets/png/sponsors/3.png'
import D from '../../assets/png/sponsors/4.png'
import E from '../../assets/png/sponsors/5.png'
import F from '../../assets/png/sponsors/6.png'

// Projects
import P1 from '../../assets/png/projects/1.png'
import P2 from '../../assets/png/projects/2.png'
import P3 from '../../assets/png/projects/3.png'

import Footer from "../../shared/Footer/Footer";
import {FiArrowUpRight, FiLink} from "react-icons/fi";

const Sponsors = [
    A,
    B,
    C,
    D,
    E,
    F
]

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
                            Learn More
                        </Button>
                    </Grid>
                    <Grid item xs={5} display='flex' justifyContent='center'>
                        <Wrapper hidden>
                            <iframe
                                src="https://widget.onramper.com?color=924CEE&apiKey=pk_prod_fTeblOWrTrfUL0SmajuHmQTTg5ne0qqGwa9K9JlBcR00&defaultCrypto=ETH&defaultFiatSoft=USD&defaultAmount=50&recommendedCryptoCurrencies=ETH,BTC,MATIC,FTM,USDC,USDT&supportSwap=false"
                                loading='lazy'
                                height="595px"
                                width="100%"
                                title="Onramper widget"
                                frameBorder="0"
                                allow="accelerometer;
                autoplay; camera; gyroscope; payment"
                                style={{
                                    boxShadow: "1px 1px 1px 1px black",
                                    borderRadius: "20px",
                                    backgroundColor: 'white',
                                }}
                            >
                                <a href="https://widget.onramper.com" target="_blank">
                                    Buy crypto
                                </a>
                            </iframe>
                        </Wrapper>
                    </Grid>
                </Grid>
            </Box>

            <Box py={10}/>

            <Box>
                <Box width={'49%'} margin='auto'>
                    <Typography paragraph variant='subTitle' textAlign='center'>
                        All your crypto action in one place
                    </Typography>

                    <Typography pb={10} variant='body1' color='textSecondary' textAlign='center'>
                        Swap your tokens, invest in amazing tokens and NFT projects, and be a part of our community.
                    </Typography>

                </Box>

                <Wrapper height='auto'
                         overflow='hidden'
                         px={8} py={6} width='80%' showHue={false}>
                    <Grid container alignItems='center'>
                        <Grid item display='flex' flexDirection='column' justifyContent='center'  xs={6}>

                            <Box>
                            <img src={SwapSVG} width='48px'/>
                            <Typography variant={'h5'}>
                                Swap
                            </Typography>

                            <Typography paragraph fontWeight={200} color='textSecondary' variant={'body2'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </Typography>

                            <Button variant='contained'>
                                Swap now
                            </Button>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Wrapper hidden height='auto' width='65%'>
                                <img src={SwapPNG} style={{margin: 'auto', display: 'block'}} width='240px'/>
                            </Wrapper>
                        </Grid>
                    </Grid>
                </Wrapper>

                <Box py={4}/>

                <Wrapper height='auto'
                         overflow='hidden'
                         px={8} py={6} width='80%' showHue={false}>
                    <Grid container>
                        <Grid item xs={7}>
                              <Wrapper hidden={true}/>
                              <img src={EarnPNG} style={{
                                  position: 'absolute',
                                  bottom: 0
                              }} width='400px'/>
                        </Grid>
                        <Grid item display='flex' flexDirection='column' justifyContent='center'  xs={5}>
                            <Box>
                                <img src={MoneySVG} width='48px'/>
                                <Typography variant={'h5'}>
                                    Earn
                                </Typography>

                                <Typography paragraph fontWeight={200} color='textSecondary' variant={'body2'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </Typography>

                                <Button variant='contained'>
                                    Earn Today
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Wrapper>


                <Box py={4}/>

                <Wrapper height='auto'
                         overflow='hidden'
                         px={8} py={6} width='80%' showHue={false}>
                    <Grid container>
                        <Grid item display='flex' flexDirection='column' justifyContent='center'  xs={6}>

                            <Box>
                                <img src={ProfileSVG} width='48px'/>
                                <Typography variant={'h5'}>
                                    FSmart Club
                                </Typography>

                                <Typography paragraph fontWeight={200} color='textSecondary' variant={'body2'}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                </Typography>

                                <Button variant='contained'>
                                    See Benefits
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Wrapper hidden height='auto' width='65%'>
                                <img src={FSmartClubPNG} style={{margin: 'auto', display: 'block'}} width='240px'/>
                            </Wrapper>
                        </Grid>
                    </Grid>
                </Wrapper>

                <Box py={8}/>

                <Box px={10}>
                    <Typography pb={5} variant='subTitle' textAlign='center'>
                        Be a part of FS community.
                    </Typography>
                    <Box display='flex' justifyContent='space-between'>
                            <Stat label='15K+' desc='Total Wallets'/>
                            <Stat label='250K+' desc='Total Swaps'/>
                            <Stat label='$2.1M+' desc='Total Volume'/>
                    </Box>
                    </Box>
            </Box>

            <Box py={8}/>
            <Box >
                <Box  display='flex' flexDirection='column' justifyContent='center'>
                    <Typography variant='subTitle' pb={3} textAlign='center'>
                        Featured Projects
                    </Typography>
                    <Typography variant='body2' textAlign='center'>
                        Some of our amazing projects
                    </Typography>
                    <Box display='flex' gap={2} justifyContent='center'>
                        <Button endIcon={<FiArrowUpRight/>} color='primary' variant='link' size='small' >
                            How to participate
                        </Button>
                        <Button endIcon={<FiArrowUpRight/>} color='primary' variant='link' size='small' >
                            View all
                        </Button>
                    </Box>
                </Box>

                    <Box position='relative' display='flex' gap={3} py={5} justifyContent='center' >
                        <img src={P2}/>
                        <img src={P3}/>
                        <img src={P1}/>
                        <img src={HueBGSVG} style={{position: 'absolute', top: '50%',
                            transform: 'translateY(-50%)',
                        zIndex: -1}} width='150%' />
                    </Box>
            </Box>

            <Box py={4}/>

            <Box>
                <Typography pb={10} variant='subTitle' textAlign='center'>
                    Backed by some amazing folks.
                </Typography>
                <Grid container spacing={5} width='70%' margin='auto'>
                    {
                        Sponsors.map(
                            sponsor =>
                                <Grid item xs={4}>
                                    <img style={{
                                        margin: 'auto',
                                        display: 'inherit'
                                    }} width='100px' src={sponsor} />
                                </Grid>
                        )
                    }
                </Grid>
            </Box>

            <Box py={5}/>

            <Footer/>
        </Container>
    );
};


const Stat = ({label, desc}) => {
    return (
        <Box>
            <Typography variant='titleText' letterSpacing={'-1px'} fontSize='48px' fontWeight={700} lineHeight='50px'>
                {label}
            </Typography>
            <Typography variant='body1'>
                {desc}
            </Typography>
        </Box>
    )
}

export default Home;
