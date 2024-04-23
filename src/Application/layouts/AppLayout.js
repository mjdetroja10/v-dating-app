import PropTypes from 'prop-types'

import { Box } from '@mui/material'

import { Header } from './HeaderComponent/Header'

export const AppLayout = ({ headerMenu = [], headerChildren = null, children }) => {
    return (
        <Box>
            <Header menu={headerMenu} headerChildren={headerChildren} />
            {children}
        </Box>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    headerMenu: PropTypes.array,
    headerChildren: PropTypes.node,
}
