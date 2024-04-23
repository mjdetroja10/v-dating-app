import { MENU_ITEM_TYPE } from 'Application/Constants/HeaderConstant'
import { HOME_URL, LOGIN_URL } from 'Application/Constants/RouteConstant'
import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { BarsIcon } from 'Application/Molecules/Icons/BarsIcon'
import PropTypes from 'prop-types'
import { Fragment, useMemo, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AppBar, Box, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material'

import { DesktopLogo, NavLink } from './Header.styled'

const getContent = (item, navigate) => {
    switch (item.type) {
        case MENU_ITEM_TYPE.LINK:
            return (
                <NavLink sx={{}} to={item.path}>
                    {item.title}
                </NavLink>
            )

        case MENU_ITEM_TYPE.BUTTON:
            return (
                <Button color="primary" onClick={item.action(navigate)}>
                    {item.title}
                </Button>
            )

        default:
            return null
    }
}

export const Header = ({ menu = [], headerChildren }) => {
    const [open, setOpen] = useState(false)

    const smallDevices = useMediaQuery((theme) => theme.breakpoints.down('sm'))

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
        <AppBar
            position="fixed"
            sx={{ backgroundColor: 'white.main', padding: { xs: '20px 12px', md: '20px 28.5px' } }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', p: 0 }}>
                <DesktopLogo src={desktopImgSrc} alt="desktop-logo" onClick={() => navigate(HOME_URL)} />

                {headerChildren
                    ? headerChildren
                    : menu.map(({ group }, index) => (
                          <Box
                              key={index}
                              sx={{
                                  display: { xs: 'none', md: 'flex' },
                                  flexDirection: 'row',
                                  gap: 10,
                              }}
                          >
                              {group.map((item) => (
                                  <Fragment key={item.title}>{getContent(item, navigate)}</Fragment>
                              ))}
                          </Box>
                      ))}
                {!headerChildren && (
                    <Fragment>
                        <IconButton sx={{ display: { xs: 'block', md: 'none' } }} onClick={toggleDrawer}>
                            <BarsIcon height={40} width={40} />
                        </IconButton>
                        <Drawer
                            open={open}
                            onClose={toggleDrawer}
                            elevation={0}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <Box p={10}>
                                {menu.map(({ group }, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            display: { xs: 'flex', md: 'none' },
                                            flexDirection: 'column',
                                            gap: 5,
                                            mb: 5,
                                        }}
                                    >
                                        {group.map((item) => (
                                            <Fragment key={item.title}>{getContent(item, navigate)}</Fragment>
                                        ))}
                                    </Box>
                                ))}
                            </Box>
                        </Drawer>
                    </Fragment>
                )}
            </Toolbar>
        </AppBar>
    )
}

Header.propTypes = {
    menu: PropTypes.array,
    headerChildren: PropTypes.node,
}
