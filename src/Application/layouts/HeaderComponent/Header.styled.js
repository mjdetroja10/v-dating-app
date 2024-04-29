import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { AppBar, Box } from '@mui/material'

export const MuiAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.white.main,
    zIndex: theme.zIndex.drawer + 1,

    '& .MuiToolbar-root': {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: theme.spacing(0),
    },

    '& .logo': {
        cursor: 'pointer',
        maxWidth: '172px',
    },

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2.5, 3.5625),
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2.5, 1.5),
    },
}))

export const DesktopContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(10),
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',

    [theme.breakpoints.down('md')]: {
        display: 'none',

        '&.sidebar-header-content': {
            display: 'flex',
            paddingLeft: theme.spacing(1.25),
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            width: 'calc(100% - 127px)',
        },
    },

    [theme.breakpoints.up('md')]: {
        '&.sidebar-header-content': {
            gap: theme.spacing(2.5),
        },
    },
}))

export const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.black.dark,
    ...theme.typography.h5,
}))

export const MobileContentWrapper = styled(Box)(({ theme }) => ({
    flexDirection: 'column',
    gap: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
}))
