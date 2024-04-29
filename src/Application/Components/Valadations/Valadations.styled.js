import styled from '@emotion/styled'
import { AccordionSummary } from '@mui/material'

export const AccordionContent = styled(AccordionSummary)(({ theme }) => ({
    '& .MuiAccordionSummary-content': {
        alignItems: 'center',
        gap: theme.spacing(1.5),
    },

    '& img': {
        width: 40,
        height: 40,
        borderRadius: '100%',
        border: `1px solid ${theme.palette.primary.main}`,
        objectFit: 'cover',
    },

    [theme.breakpoints.down('sm')]: {
        '& h5': {
            fontSize: '16px',
        },
    },
}))
