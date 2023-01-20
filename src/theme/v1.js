import {createTheme} from "@mui/material";

const theme = createTheme({
    components: {
        MuiTypography: {
          variants: [
              {
                  props: {variant: 'titleText'},
                  style: {
                      fontSize: '90px',
                      lineHeight: '85px',
                      background: '#987EF5 linear-gradient(to right, #987EF5 0%, #DF908C 100%)',
                      '-webkit-background-clip': 'text',
                      '-webkit-text-fill-color': 'transparent',
                      letterSpacing: '-5px'
                  }
              }
                ]
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        borderRadius: '100px',
                        backgroundColor: 'background: hsla(275, 98%, 68%, 1);\n' +
                            '\n' +
                            'background: linear-gradient(315deg, hsla(275, 98%, 68%, 1) 0%, hsla(252, 74%, 51%, 1) 100%);\n' +
                            '\n' +
                            'background: -moz-linear-gradient(315deg, hsla(275, 98%, 68%, 1) 0%, hsla(252, 74%, 51%, 1) 100%);\n' +
                            '\n' +
                            'background: -webkit-linear-gradient(315deg, hsla(275, 98%, 68%, 1) 0%, hsla(252, 74%, 51%, 1) 100%);\n' +
                            '\n' +
                            'filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#BA5CFD", endColorstr="#4B25DF", GradientType=1 );',
                        textTransform: 'none',
                        color: 'white',
                        fontWeight: 500,
                        paddingInline:  '30px'
                    }
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        color: 'white',
                        fontWeight: 500,
                        paddingInline:  '30px',
                        borderRadius: '100px',
                        border: '1px solid white'
                    }
                }
            ]
        }
    },
    typography: {
        fontFamily: "'Inter', sans-serif"
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#000'
        }
    }
});

export default theme
