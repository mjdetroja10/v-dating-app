import { userHeaderMenu } from 'Application/Constants/HeaderConstant'
import { SIDEBAR_MENU } from 'Application/Constants/SidebarConstant'
import { AppLayout } from 'Application/layouts/AppLayout'
import { useState } from 'react'

import { Box, Grid } from '@mui/material'

import { MyFriends } from './MyFriends/MyFriends'
import { PenidngRequestList } from './PenidngRequestList/PenidngRequestList'

export const Valadations = () => {
    const [reloadMyFriends, setReloadMyFriends] = useState(false)

    return (
        <AppLayout headerMenu={userHeaderMenu} sidebarMenu={SIDEBAR_MENU} hasSideBar={true}>
            <Box sx={{ padding: 2.5 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <PenidngRequestList setReloadMyFriends={setReloadMyFriends} />
                    </Grid>
                    <Grid item xs={12}>
                        <MyFriends reloadMyFriends={reloadMyFriends} setReloadMyFriends={setReloadMyFriends} />
                    </Grid>
                </Grid>
            </Box>
        </AppLayout>
    )
}
