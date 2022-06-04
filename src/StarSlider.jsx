import React, {useState} from 'react';
import {Slider, Stack, Typography, Box, styled} from '@mui/material';

import StarIcon from '@mui/icons-material/Star';

const RatingSlider = styled(Slider)({
    color: '#52af77',
    height: 10,
    '& .MuiSlider-thumb': {
        display: 'none'
    }
})

function marks(currentValue) {
    const getColor = (required) => {
        if(currentValue >= required){
            return "tomato"
        }
        return 'gray'
    }

    return [
        {
            value: 80,
            label: <StarIcon sx={{position: 'absolute', mt: -3, ml: -2, color: getColor(80)}} fontSize={'medium'}/>,
        },
        {
            value: 90,
            label: <StarIcon sx={{position: 'absolute', mt: -3, ml: -2, color: getColor(90)}} fontSize={'medium'}/>,
        },
        {
            value: 100,
            label: <StarIcon sx={{position: 'absolute', mt: -3, ml: -2, color: getColor(100)}} fontSize={'medium'}/>,
        },
    ]
}

export default function StarSlider() {
    
    const [value, setValue] = useState(10);
    const handleValueChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Box sx={{backgroundColor: 'black', height: '100vh', px: 13, py: 13 }} maxWidth='xs'>
            <Stack sx={{ width: 300,  }} spacing={5}>
                <Typography color='white'> Slider with Star </Typography>

                <RatingSlider
                    value={value}
                    marks={marks(value)}
                />
                <Slider
                    value={value}
                    onChange={handleValueChange}
                    valueLabelDisplay="auto"
                />
            </Stack>
        </Box>
    );
}