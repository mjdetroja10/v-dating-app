import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'

import { Box, Toolbar } from '@mui/material'

import { Header } from './HeaderComponent/Header'
import { SidebarComponent } from './SidebarComponent/SidebarComponent'

export const AppLayout = (props) => {
    const { headerMenu = [], headerChildren = null, sidebarMenu = [], hasSideBar = false, children } = props
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

    return (
        <Box sx={{ display: hasSideBar ? 'flex' : 'inherit' }}>
            <Header
                menu={headerMenu}
                hasSideBar={hasSideBar}
                headerChildren={headerChildren}
                toggleSidebar={toggleSidebar}
            />
            {hasSideBar ? (
                <Fragment>
                    <SidebarComponent menu={sidebarMenu} open={sidebarOpen} toggleSidebar={toggleSidebar} />
                    <Box component="main" sx={{ flexGrow: 1, p: 6.5 }}>
                        <Toolbar />
                        {children}
                    </Box>
                </Fragment>
            ) : (
                children
            )}
        </Box>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
    headerMenu: PropTypes.array,
    sidebarMenu: PropTypes.array,
    hasSideBar: PropTypes.bool,
    headerChildren: PropTypes.node,
}
