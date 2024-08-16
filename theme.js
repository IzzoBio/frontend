import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#eedac2',
        },
        secondary: {
            light:'#EFC4A8',
            main: '#e5a88b',
            dark: '#C47E65'
        },
        green:{
            light: '#6d736b',
            main: '#878f84',
            dark: '#595e57'
      } ,
    },
    components: {}
});

export default theme;