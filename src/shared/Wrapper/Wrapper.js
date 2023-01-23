import React from 'react';
import {Box} from "@mui/material";
import PurpleHue from "../../assets/svg/purple hue.svg";
import OrangeHue from "../../assets/svg/orange hue.svg";

const Wrapper = ({ children, hidden = 'glass' , showHue = true, width = "60%", height = '250px', ...props }) => {
    return (
        <Box
            className={hidden}
            position='relative'
            height={height}
            width={width}
            margin='auto'
            {...props}
        >
            {showHue && <img
                style={{
                    position: 'absolute',
                    top: '-100%',
                    left: '50%',
                    zIndex: -1,
                    transform: 'translateX(-50%)'
                }}
                src={PurpleHue}
                width='250%'
            />}

            {showHue && <img
                style={{
                    position: 'absolute',
                    bottom: '-100%',
                    left: '50%',
                    zIndex: -1,
                    transform: 'translateX(-60%)'
                }}
                src={OrangeHue} width='250%'/>}


            {
                children
            }
        </Box>
    );
};

export default Wrapper;
