import PropTypes from 'prop-types'

import { Alert, Box, Snackbar } from '@mui/material'

export const AlertComponent = (props) => {
    const { position = { vertical: 'top', horizontal: 'center' }, message, type = 'success', onClose } = props

    if (!message) return null

    return (
        <Box sx={{ minWidth: 500 }}>
            <Snackbar anchorOrigin={position} open={Boolean(message)} autoHideDuration={6000} onClose={onClose}>
                <Alert onClose={onClose} severity={type} sx={{ minWidth: '250px' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}
AlertComponent.propTypes = {
    position: PropTypes.object,
    message: PropTypes.string,
    type: PropTypes.string,
    onClose: PropTypes.func,
}
