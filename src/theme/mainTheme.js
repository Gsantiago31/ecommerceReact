import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blackTheme = createTheme({
    palette: {
        primary: {
            main: '#000000'
        },
        secondary: {
            main: '#e30052'
        },
        fontColor: {
            main: '#ffffff'
        },
        dashboard: {
            background: '#FBE8FF',
            primary: '#998693',
            secondary: '#ef32d9',
            terciary: '#ADACAC',
            blue: '#89fffd',
            font: '#000000'
        },
        error: {
            main: red.A700
        }
    }
})