import styled from '@emotion/styled'
import { Button, Drawer, ListItem, ListItemText } from '@mui/material'

export const StyledDrawer = styled(Drawer)(({ theme }) => ({
    flexShrink: 0,
    position: 'relative',
    [`& .MuiDrawer-paper`]: {
        boxSizing: 'border-box',
        marginTop: theme.spacing(8),
        boxShadow: 'none',
        borderRight: 'none',
    },

    '& .logout-wrapper': {
        position: 'absolute',
        bottom: '62px',
        textAlign: 'center',
        width: '100%',
    },
}))

export const StyledItem = styled(ListItem)(({ theme }) => ({
    color: '#0C0E10',
    marginBottom: theme.spacing(2.5),
    '&.active': {
        background: '#E1EEFC',
        '& .MuiTypography-root': {
            fontWeight: 600,
        },
    },

    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(0),
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0.5, 5),
    },
}))

export const Text = styled(ListItemText)(({ theme }) => ({
    '& .MuiTypography-root': {
        ...theme.typography.h5,
    },
}))

export const StyledButton = styled(Button)(({ theme }) => ({
    ...theme.typography.h6,
    textTransform: 'capitalize',
    color: theme.palette.black.dark,
    width: '100%',
    marginBottom: theme.spacing(2.5),
}))
