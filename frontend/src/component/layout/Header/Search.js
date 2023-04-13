import React, {Fragment, useState} from 'react'
import { Stack ,Slider} from '@mui/material';
const Search = () => {


    const Style = {
        width: "10vmax",
        maxwidth: "100%",
        color:"red"
    }


    return (
        <Fragment style={Style}>
            <Stack  style={Style} spacing={2}
                direction="row"
                sx={
                    {mb: 1}
                }
                alignItems="center">
                {/* <VolumeDown/> */}
                <Slider aria-label="Volume"
                    // value={value}
                    // onChange={handleChange}
                    />
                {/* <VolumeUp/> */}
            </Stack>
            <Slider disabled
                defaultValue={30}
                aria-label="Disabled slider"/>
        </Fragment>
    )
}

export default Search;
