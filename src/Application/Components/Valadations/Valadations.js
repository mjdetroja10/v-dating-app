import { userHeaderMenu } from 'Application/Constants/HeaderConstant'
import { SIDEBAR_MENU } from 'Application/Constants/SidebarConstant'
import { AppLayout } from 'Application/layouts/AppLayout'

export const Valadations = () => {
    return (
        <AppLayout headerMenu={userHeaderMenu} sidebarMenu={SIDEBAR_MENU} hasSideBar={true}>
            Valadations
        </AppLayout>
    )
}
