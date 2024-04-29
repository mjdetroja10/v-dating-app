import { MENU_ITEM_TYPE } from 'Application/Constants/HeaderConstant'
import { DISCOVER_URL, HOME_URL, LOGIN_URL } from 'Application/Constants/RouteConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { BarsIcon } from 'Application/Molecules/Icons/BarsIcon'
import PropTypes from 'prop-types'
import { Fragment, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Avatar, Box, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material'

import { DesktopContent, MobileContentWrapper, MuiAppBar, NavLink } from './Header.styled'

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
                        <Avatar
                            src={item.getImageSrc(user)}
                            alt={'user profile'}
                            sx={{ '& img': { objectPosition: 'center top' } }}
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
            <Toolbar>
                <img
                    src={desktopImgSrc}
                    className="logo"
                    alt="desktop-logo"
                    onClick={() => navigate(localStorage.getItem('token') ? DISCOVER_URL : HOME_URL)}
                />

                {headerChildren
                    ? headerChildren
                    : menu.map(({ group, className }, index) => (
                          <DesktopContent key={index} className={className}>
                              {group.map((item) => (
                                  <Fragment key={item.id}>{getContent(item, navigate, userDetails)}</Fragment>
                              ))}
                          </DesktopContent>
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
            </Toolbar>
        </MuiAppBar>
    )
}

Header.propTypes = {
    menu: PropTypes.array,
    headerChildren: PropTypes.node,
    hasSideBar: PropTypes.bool,
    toggleSidebar: PropTypes.func,
}
