import styled from '@emotion/styled'
import { Box } from '@mui/material'

export const MatchWrapper = styled(Box)({
    backgroundColor: '#D8E9FB',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    cursor: 'pointer',
})

export const Content = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(13),
    padding: theme.spacing(12.5, 0),
}))

export const BorderBox = styled(Box)(({ theme }) => ({
    maxWidth: '380px',
    paddingLeft: theme.spacing(2.5),
    borderLeft: '2px solid #145CA8',
}))
