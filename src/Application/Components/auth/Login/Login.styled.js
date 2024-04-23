import { Button } from 'Application/Molecules/Atoms/Button/Button'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const LoginFrame = styled('img')(({ theme }) => ({
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))

export const LoginFormWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',

    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3.25, 2.5),
    },
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(3.25, 11.25),
    },
}))

export const LoginButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    border: 'none',
    boxShadow: theme.shadows[0],
}))
