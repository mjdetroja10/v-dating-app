import { HomeIcon } from 'Application/Molecules/Icons/HomeIcon'
import { NotificationIcon } from 'Application/Molecules/Icons/NotificationIcon'

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
    IMAGE: 'IMAGE',
}

export const commonHeaderMenu = [
    {
        className: '',
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
    className: '',
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

export const userHeaderMenu = [
    {
        className: 'sidebar-header-content',
        group: [
            {
                id: 5,
                title: <NotificationIcon width={32} height={32} />,
                path: MY_PROFILE_URL,
                type: MENU_ITEM_TYPE.ICON_BUTTON,
            },
            {
                id: 6,
                title: '',
                getImageSrc: (user) => (user ? user?.images[0].src : ''),
                path: MY_PROFILE_URL,
                type: MENU_ITEM_TYPE.IMAGE,
            },
        ],
    },
]

export const profileHeaderMenu = [
    {
        className: 'sidebar-header-content',
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
