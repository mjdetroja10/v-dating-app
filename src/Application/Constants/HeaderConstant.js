import { HomeIcon } from 'Application/Molecules/Icons/HomeIcon'
import { NotificationIcon } from 'Application/Molecules/Icons/NotificationIcon'
import { jwtDecode } from 'jwt-decode'

import {
    CONTACT_US_URL,
    DISCOVER_URL,
    LOGIN_URL,
    MY_PROFILE_URL,
    OUR_MISSION_URL,
    WHY_VALADATE_URL,
} from './RouteConstant'

export const MENU_ITEM_TYPE = {
    LINK: 'LINK',
    BUTTON: 'BUTTON',
    ICON_BUTTON: 'ICON_BUTTON',
}

export const commonHeaderMenu = [
    {
        group: [
            {
                id: 1,
                title: 'Why Valadate?',
                path: WHY_VALADATE_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                id: 2,
                title: 'Our Mission',
                path: OUR_MISSION_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                id: 3,
                title: 'Contact Us',
                path: CONTACT_US_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
        ],
    },
]

export const homeHeaderMenu = commonHeaderMenu.concat({
    group: [
        {
            id: 4,
            title: 'Log In',
            type: MENU_ITEM_TYPE.BUTTON,
            path: '',
            action: (navigate) => () => {
                navigate(LOGIN_URL)
            },
        },
    ],
})

const getProfileSrc = () => {
    if (!localStorage.getItem('token')) return null
    return jwtDecode(localStorage.getItem('token'))?.images[0]?.src
}

export const userHeaderMenu = [
    {
        group: [
            {
                id: 5,
                title: <NotificationIcon width={32} height={32} />,
                path: MY_PROFILE_URL,
                type: MENU_ITEM_TYPE.ICON_BUTTON,
            },
            {
                id: 6,
                title: (
                    <img
                        src={getProfileSrc()}
                        alt="user profile"
                        style={{ width: 50, height: 50, borderRadius: '100%', objectFit: 'cover' }}
                    />
                ),
                path: MY_PROFILE_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
        ],
    },
]

export const profileHeaderMenu = [
    {
        group: [
            {
                id: 7,
                title: <NotificationIcon width={32} height={32} />,
                path: MY_PROFILE_URL,
                type: MENU_ITEM_TYPE.ICON_BUTTON,
            },
            {
                id: 8,
                title: <HomeIcon width={34} height={34} />,
                path: DISCOVER_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
        ],
    },
]
