import { createTheme } from "@mui/material";
import { palette } from "./palette";
import typography from "./typography";


export const defaultTheme = createTheme({
    components: {
        MuiTab: {
            styleOverrides: {
                // textColorPrimary: {
                //     color: "#7AFF66"
                // },
                textColorSecondary: {
                    color: "#CE0F0F"
                }
                // wrong usage
                // selected: {
                //   color: "#fafafa",
                //   backgroundColor: "#111111"
                // }
            }
        }
    },
    palette,
    typography: typography as any,
}
)