import { Box } from "@mui/material";
import background from '../pictures/ha.png';

const LazyBackground = () => {
    return (
        <Box sx={{ position: "fixed", zIndex: '-1', bgcolor: 'blue' }}>
            <img src={background} alt="background" style={{ height: 'max(100vh , 60vw)', opacity: .8, filter: 'blur(2px)' }} />
        </Box>);
};

export default LazyBackground;