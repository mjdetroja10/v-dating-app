import { MENU_ITEM_TYPE } from 'Application/Constants/HeaderConstant'
import { DISCOVER_URL, HOME_URL, LOGIN_URL } from 'Application/Constants/RouteConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { BarsIcon } from 'Application/Molecules/Icons/BarsIcon'
import PropTypes from 'prop-types'
import { Fragment, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Box, Drawer, IconButton, useMediaQuery } from '@mui/material'

import { DesktopLogo, MobileContentWrapper, MuiAppBar, NavLink, StyledToolbar } from './Header.styled'

const getContent = (item, navigate, user) => {
    switch (item.type) {
        case MENU_ITEM_TYPE.LINK:
            return <NavLink to={item.path}>{item.title}</NavLink>

        case MENU_ITEM_TYPE.BUTTON:
            return (
                <Button color="primary" onClick={item.action(navigate)}>
                    {item.title}
                </Button>
            )

        case MENU_ITEM_TYPE.ICON_BUTTON:
            return <IconButton>{item.title}</IconButton>

        case MENU_ITEM_TYPE.IMAGE:
            return (
                item.getImageSrc(user) && (
                    <NavLink to={item.path}>
                        <img
                            src={item.getImageSrc(user)}
                            alt="user profile"
                            style={{ width: 50, height: 50, borderRadius: '100%', objectFit: 'cover' }}
                        />
                    </NavLink>
                )
            )

        default:
            return null
    }
}

export const Header = (props) => {
    const { menu = [], headerChildren = null, hasSideBar, toggleSidebar } = props
    const [open, setOpen] = useState(false)

    const { userDetails } = useAuth()

    const smallDevices = useMediaQuery((theme) => theme.breakpoints.down('sm'))

    const tabDevices = useMediaQuery((theme) => theme.breakpoints.down('md'))

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const desktopImgSrc = useMemo(
        () => (smallDevices && pathname !== LOGIN_URL ? '/images/mobile-logo.png' : '/images/Desktop-logo.png'),
        [pathname, smallDevices]
    )

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <MuiAppBar position="fixed">
            <StyledToolbar>
                <DesktopLogo
                    src={desktopImgSrc}
                    alt="desktop-logo"
                    onClick={() => navigate(localStorage.getItem('token') ? DISCOVER_URL : HOME_URL)}
                />

                {headerChildren
                    ? headerChildren
                    : menu.map(({ group }, index) => (
                          <Box
                              key={index}
                              sx={{
                                  display: { xs: hasSideBar ? 'flex' : 'none', md: 'flex' },
                                  flexDirection: 'row',
                                  gap: hasSideBar ? 5 : 10,
                                  alignItems: 'center',
                              }}
                          >
                              {group.map((item) => (
                                  <Fragment key={item.id}>{getContent(item, navigate, userDetails)}</Fragment>
                              ))}
                          </Box>
                      ))}
                {!headerChildren && tabDevices && (
                    <Fragment>
                        <IconButton
                            onClick={() => {
                                toggleDrawer()
                                toggleSidebar()
                            }}
                        >
                            <BarsIcon height={40} width={40} />
                        </IconButton>
                        <Drawer
                            open={open && menu.length !== 0 && !hasSideBar}
                            onClose={toggleDrawer}
                            elevation={0}
                            sx={{
                                [`& .MuiDrawer-paper`]: {
                                    mt: 8,
                                },
                            }}
                        >
                            <Box p={10}>
                                {menu.map(({ group }, index) => (
                                    <MobileContentWrapper key={index}>
                                        {group.map((item) => (
                                            <Fragment key={item.title}>
                                                {getContent(item, navigate, userDetails)}
                                            </Fragment>
                                        ))}
                                    </MobileContentWrapper>
                                ))}
                            </Box>
                        </Drawer>
                    </Fragment>
                )}
            </StyledToolbar>
        </MuiAppBar>
    )
}

Header.propTypes = {
    menu: PropTypes.array,
    headerChildren: PropTypes.node,
    hasSideBar: PropTypes.bool,
    toggleSidebar: PropTypes.func,
}
