import PropTypes from 'prop-types'

import styled from '@emotion/styled'
import { Box, CircularProgress, Typography } from '@mui/material'

const ProgressLabel = styled(Box)({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ProgressBar = ({ value }) => {
    if (!value) return null

    return (
        <Box p={1.5} sx={{ position: 'relative', display: 'inline-flex' }}>
            <svg width={0} height={0}>
                <defs>
                    <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F9DB6D" />
                        <stop offset="50%" stopColor="#FF4365" />
                        <stop offset="100%" stopColor="#06D6A0" />
                    </linearGradient>
                </defs>
            </svg>
            <CircularProgress
                variant="determinate"
                value={value}
                sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }}
            />
            <ProgressLabel>
                <Typography variant="caption" color="priamry.main">
                    {value}
                </Typography>
            </ProgressLabel>
        </Box>
    )
}
ProgressBar.propTypes = {
    value: PropTypes.number,
}
