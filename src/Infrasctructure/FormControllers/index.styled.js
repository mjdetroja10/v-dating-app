import styled from '@emotion/styled'
import { Button, FormControlLabel, FormLabel, TextField } from '@mui/material'

export const StyledInput = styled(TextField)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& ': {
        marginTop: '0 !important',

        '& .MuiFormHelperText-root': {
            ...theme.typography.body1,
            fontWeight: 600,
        },
        '& .Mui-error': {
            borderColor: ' red !important',
        },

        '& .MuiInputBase-root': {
            border: `1px solid ${theme.palette.black.main}`,
            borderRadius: theme.spacing(1),
            ...theme.typography.h5,
            color: theme.palette.black.dark,
            fontFamily: 'Josefin Sans',

            '& input': {
                padding: theme.spacing(1.5, 2.5),
            },
            '&:focus': {
                borderColor: theme.palette.primary.main,
            },
        },
    },
}))

export const StyledRadioLabel = styled(FormControlLabel)(({ theme }) => ({
    '&': {
        backgroundColor: '#fbfdff66',
        borderRadius: theme.spacing(1),
        padding: theme.spacing(2, 2.5),
        marginBottom: theme.spacing(1.5),
        filter: 0.5,
        color: theme.palette.black.dark,
        ...theme.typography.h4,

        '&.active': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
        },

        '& svg': {
            display: 'none',
        },
    },
}))

export const StyledCheckboxLabel = styled(FormControlLabel)(({ theme }) => ({
    '&': {
        backgroundColor: '#fbfdff66',
        borderRadius: theme.spacing(5),
        padding: theme.spacing(1, 2.5),
        border: '1px solid #145CA8',
        color: theme.palette.black.dark,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...theme.typography.body1,

        '&.active': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.white.main,
        },
        '& .MuiButtonBase-root': {
            display: 'none',
        },
    },
}))

export const StyledLabel = styled(FormLabel)(({ theme }) => ({
    marginBottom: theme.spacing(2),
    fontSize: '20px',
    fontFamily: 'Josefin Sans',
    fontWeight: 500,
    lineHeight: '20px',
    color: theme.palette.black.dark,
}))

export const UploadButton = styled(Button)(() => ({
    maxWidth: '237px',
    minWidth: '237px',
    minHeight: '333px',
    maxHeight: '333px',
    border: '5px dashed',

    '&:hover': {
        border: '5px dashed',
    },
}))
