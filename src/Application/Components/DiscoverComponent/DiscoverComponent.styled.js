import { Swiper } from 'swiper/react'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,

    [theme.breakpoints.up('md')]: { overflowY: 'auto', height: '100vh', padding: theme.spacing(2.5, 5) },
    [theme.breakpoints.down('md')]: { overflowY: 'hidden', padding: theme.spacing(1.25, 2.5) },
}))

export const StyledSwiper = styled(Swiper)({
    height: 'calc(100vh - 180px)',
    overflow: 'hidden',
})
