import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { Swiper } from 'swiper/react'

import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const Wrapper = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[2],
    height: 'calc(100vh - 240px)',
    padding: theme.spacing(2.5),
    overflowY: 'auto',

    '& img': {
        objectFit: 'cover',
        objectPosition: 'top',
        width: '100%',
        borderRadius: theme.spacing(1.5),
    },

    '& .main-image': {
        height: 500,
    },
    '& .small-image': {
        height: 240,
    },

    [theme.breakpoints.down('md')]: {
        padding: 0,
        height: 'auto',
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

// eslint-disable-next-line no-unused-vars
export const Slider = styled(Swiper)(({ theme }) => ({
    '& .swiper-slide': {
        width: '100% !important',
        height: 'auto',

        '& img': {
            height: '100%',
            objectFit: 'cover',
        },
    },
    '& .swiper-pagination-bullets': {
        display: 'flex',
        top: 0,
        bottom: 0,

        height: theme.spacing(1.5),
        padding: theme.spacing(1, 2.5),
        justifyContent: 'start',
        alignItems: 'center',

        '& .swiper-container ': {
            maxWidth: '100%',
            height: '100%',
        },

        '& .swiper-pagination-bullet': {
            height: '2px',
            borderRadius: '4px',
            width: '25%',
            boxShadow: '0px 0px 4px 1px #00000040',
            backgroundColor: '#5AA1EC',

            '&.swiper-pagination-bullet-active': {
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 0px 4px 1px #00000040',
            },
        },
    },
}))
