import { Button } from 'Application/Molecules/Atoms/Button/Button'

import styled from '@emotion/styled'
import { Box, LinearProgress } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    minHeight: 'calc(100vh - 190px)',
    padding: theme.spacing(16.25, 0, 7.5),
    [theme.breakpoints.down('md')]: {},
    [theme.breakpoints.up('md')]: {},
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0.5, 2.5),
        fontSize: '14px',
    },
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(1, 5),
        ...theme.typography.h6,
    },
}))

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    width: '100%',
    height: theme.spacing(1),
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(7.5),
}))
