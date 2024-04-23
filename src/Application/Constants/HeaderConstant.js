import { CONTACT_US_URL, LOGIN_URL, OUR_MISSION_URL, WHY_VALADATE_URL } from './RouteConstant'

export const MENU_ITEM_TYPE = {
    LINK: 'LINK',
    BUTTON: 'BUTTON',
}

export const commonHeaderMenu = [
    {
        group: [
            {
                title: 'Why Valadate?',
                path: WHY_VALADATE_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
                title: 'Our Mission',
                path: OUR_MISSION_URL,
                type: MENU_ITEM_TYPE.LINK,
            },
            {
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
            title: 'Log In',
            type: MENU_ITEM_TYPE.BUTTON,
            path: '',
            action: (navigate) => () => {
                navigate(LOGIN_URL)
            },
        },
    ],
})
