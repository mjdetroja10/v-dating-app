import PropTypes from 'prop-types'

import { CircularProgress } from '@mui/material'

import { StyledButton } from './Button.styled'

export const Button = ({ variant = 'outlined', loading = false, children, ...rest }) => {
    return (
        <StyledButton
            variant={variant}
            disabled={loading}
            endIcon={loading && <CircularProgress size={25} />}
            {...rest}
        >
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired,
}
