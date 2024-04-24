import { profileHeaderMenu } from 'Application/Constants/HeaderConstant'
import { PROFILE_SIDEBAR_MENU } from 'Application/Constants/SidebarConstant'
import { AppLayout } from 'Application/layouts/AppLayout'

export const MyProfile = () => {
    return (
        <AppLayout headerMenu={profileHeaderMenu} sidebarMenu={PROFILE_SIDEBAR_MENU} hasSideBar={true}>
            MyProfile
        </AppLayout>
    )
}
