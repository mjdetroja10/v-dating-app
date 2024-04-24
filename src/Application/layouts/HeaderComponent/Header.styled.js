import { Link } from 'react-router-dom'

import styled from '@emotion/styled'
import { AppBar, Box, Toolbar } from '@mui/material'

export const MuiAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.white.main,
    zIndex: theme.zIndex.drawer + 1,

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2.5, 3.5625),
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2.5, 1.5),
    },
}))

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(0),
}))

export const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.black.dark,
    ...theme.typography.h5,
}))

export const DesktopLogo = styled('img')(() => ({
    cursor: 'pointer',
    maxWidth: '172px',
}))

export const MobileContentWrapper = styled(Box)(({ theme }) => ({
    flexDirection: 'column',
    gap: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
}))
