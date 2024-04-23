import { Link } from 'react-router-dom'

import styled from '@emotion/styled'

export const NavLink = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.black.dark,
    ...theme.typography.h5,
}))

export const DesktopLogo = styled('img')(() => ({
    cursor: 'pointer',
    maxWidth: '172px',
}))
