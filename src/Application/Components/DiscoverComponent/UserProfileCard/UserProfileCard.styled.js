import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const UserCard = styled(Box)(({ theme }) => ({
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    borderRadius: theme.spacing(1.5),
    position: 'relative',
    opacity: 1,

    '&:after': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        background: '#0C0E1099',
        transition: 'ease-in-out 0.2s',
        opacity: 0,
    },

    '&:hover': {
        '&:after': {
            opacity: 0.6,
        },
        '& .view-profile': {
            display: 'flex',
            opacity: 1,
            zIndex: 1111,
        },
    },

    [theme.breakpoints.up('md')]: {
        width: '100%',
        height: 300,
        cursor: 'pointer',
    },

    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: 'calc(100vh - 208px)',
        cursor: 'grab',
    },
}))

export const ViewProfileWrapper = styled(Box)({
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'none',
    justifyContent: 'center',
    alignItems: 'center',
})

export const CardContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '40%',
    borderRadius: theme.spacing(1.5),
    background: `linear-gradient(180deg, rgba(20, 92, 168, 0) 0%, rgba(20, 92, 168, 0.4) 26.43%, rgba(20, 92, 168, 0.8) 73%, #145CA8 100%)`,
}))

export const ProgressLabel = styled(Box)({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})
