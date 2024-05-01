import styled from '@emotion/styled'
import { Box } from '@mui/system'

export const ImageWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    '& img': {
        height: 300,
        objectFit: 'cover',
        objectPosition: 'top',
        borderRadius: theme.spacing(1.5),
    },

    [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        '& .main-img': {
            height: 300,
            width: '100%',
        },
        '& img': {
            height: 150,
            width: '100%',
        },
    },
    [theme.breakpoints.up('sm')]: {
        maxWidth: 200,
    },
}))

export const MainImageText = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '40%',
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'end',
    bottom: theme.spacing(0.5),
    right: 0,
    background:
        'linear-gradient(180deg, rgba(20, 92, 168, 0) 0%, rgba(20, 92, 168, 0.4) 26.43%, rgba(20, 92, 168, 0.8) 73%, #145CA8 100%)',
}))
