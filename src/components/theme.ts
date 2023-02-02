import { createTheme } from "@mui/material";
import { palette } from "./palette";
import typography from "./typography";


export const defaultTheme = createTheme({
    palette,
    typography: typography as any,
}
)