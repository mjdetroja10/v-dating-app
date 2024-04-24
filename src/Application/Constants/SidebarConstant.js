import { CommonThreadsIcon } from 'Application/Molecules/Icons/CommonThreadsIcon'
import { DiscoverIcon } from 'Application/Molecules/Icons/DiscoverIcon'
import { MyConnectionIcon } from 'Application/Molecules/Icons/MyConnectionIcon'

import { MENU_ITEM_TYPE } from './HeaderConstant'
import {
    COMMON_THREADS_URL,
    DISCOVER_URL,
    LOGIN_URL,
    MY_CONNECTION_URL,
    MY_PROFILE_URL,
    VALADATIONS_URL,
} from './RouteConstant'

export const SIDEBAR_MENU = [
    {
        group: [
            {
                title: 'Discover',
                path: DISCOVER_URL,
                icon: <DiscoverIcon width={20} height={20} />,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                title: 'Common Threads',
                path: COMMON_THREADS_URL,
                icon: <CommonThreadsIcon width={20} height={20} />,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                title: 'My Connections',
                path: MY_CONNECTION_URL,
                icon: <MyConnectionIcon width={20} height={20} />,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                title: 'Valadations',
                path: VALADATIONS_URL,
                icon: <MyConnectionIcon width={20} height={20} />,
                type: MENU_ITEM_TYPE.LINK,
            },
        ],
    },
]

export const PROFILE_SIDEBAR_MENU = [
    {
        group: [
            { title: 'My Profile', path: MY_PROFILE_URL, icon: '', type: MENU_ITEM_TYPE.LINK },
            { title: 'Dating Preferences', path: MY_PROFILE_URL + '1', icon: '', type: MENU_ITEM_TYPE.LINK },
            { title: 'My Account', path: MY_PROFILE_URL + '2', icon: '', type: MENU_ITEM_TYPE.LINK },
        ],
    },
    {
        className: 'logout-wrapper',
        group: [
            {
                title: 'Log Out',
                icon: '',
                type: MENU_ITEM_TYPE.BUTTON,
                action: (navigate) => () => {
                    localStorage.removeItem('token')
                    navigate(LOGIN_URL)
                },
            },
        ],
    },
]
