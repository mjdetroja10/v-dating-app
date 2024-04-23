import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 5),
    borderRadius: theme.spacing(5),
    ...theme.typography.h6,
    fontWeight: 400,

    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
    },
}))
