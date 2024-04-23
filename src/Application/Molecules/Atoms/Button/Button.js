import PropTypes from 'prop-types'

import { StyledButton } from './Button.styled'

export const Button = ({ variant = 'outlined', children, ...rest }) => {
    return (
        <StyledButton variant={variant} {...rest}>
            {children}
        </StyledButton>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
}
