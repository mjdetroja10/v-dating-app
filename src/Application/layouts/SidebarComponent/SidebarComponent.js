import { MENU_ITEM_TYPE } from 'Application/Constants/HeaderConstant'
import PropTypes from 'prop-types'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import { Box, List, ListItemButton, ListItemIcon, Toolbar } from '@mui/material'

import { StyledButton, StyledDrawer, StyledItem, Text } from './SidebarComponent.styled'

export const SidebarComponent = ({ menu = [], open, toggleSidebar }) => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    return (
        <StyledDrawer
            variant="permanent"
            open={open}
            onClose={toggleSidebar}
            ModalProps={{
                keepMounted: false,
            }}
            sx={{
                width: { xs: open ? 'auto' : 0, md: 300 },
                [`& .MuiDrawer-paper`]: {
                    width: { xs: open ? '100%' : 0, md: 300 },
                },
            }}
        >
            <Toolbar />

            {menu.map(({ group, className }, index) => (
                <Box key={index} className={className}>
                    <List>
                        {group.map((item) =>
                            item.type === MENU_ITEM_TYPE.LINK ? (
                                <StyledItem
                                    key={item.title}
                                    component={Link}
                                    to={item.path}
                                    className={pathname === item.path ? 'active' : ''}
                                >
                                    <ListItemButton>
                                        {item.icon && (
                                            <ListItemIcon sx={{ minWidth: 0, mr: 1.25 }}>{item.icon}</ListItemIcon>
                                        )}
                                        <Text primary={item.title} />
                                    </ListItemButton>
                                </StyledItem>
                            ) : item.type === MENU_ITEM_TYPE.BUTTON ? (
                                <StyledButton onClick={item.action(navigate)} key={item.title}>
                                    {item.title}
                                </StyledButton>
                            ) : (
                                ''
                            )
                        )}
                    </List>
                </Box>
            ))}
        </StyledDrawer>
    )
}

SidebarComponent.propTypes = {
    open: PropTypes.bool,
    menu: PropTypes.array,
    toggleSidebar: PropTypes.func,
}
