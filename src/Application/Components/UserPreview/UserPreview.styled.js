import { Button } from 'Application/Molecules/Atoms/Button/Button'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[2],
    height: 'calc(100vh - 240px)',
    padding: theme.spacing(2.5),
    overflowY: 'auto',

    '& .main-image': {
        minHeight: 300,
        width: '100%',
        borderRadius: 1.5,
        objectFit: 'cover',
    },
    '& .small-image': {
        height: 190,
        width: '100%',
        borderRadius: 1.5,
        objectFit: 'cover',
    },
}))

export const YellowBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5),
    border: `1px solid ${theme.palette.secondary.dark}`,
    borderRadius: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1.5),
}))

export const InterestBox = styled(Box)(({ theme }) => ({
    border: `1px solid ${theme.palette.black.light}`,
    borderRadius: theme.spacing(5),
    padding: theme.spacing(1, 2.5),

    '&.active': {
        background: '#E1EEFC',
    },
}))

export const ActionWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    direction: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(1),
    boxShadow: '0px -1px 4px 0px #0C0E1026',
}))

export const ActionButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
    '&:hover': { background: 'none', color: theme.palette.primary.main },
}))
