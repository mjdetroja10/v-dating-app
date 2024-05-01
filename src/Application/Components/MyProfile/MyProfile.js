import { profileHeaderMenu } from 'Application/Constants/HeaderConstant'
import { PROFILE_SIDEBAR_MENU } from 'Application/Constants/SidebarConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { useFetchData } from 'Application/Hooks/useFetchData'
import { AppLayout } from 'Application/layouts/AppLayout'
import { CloseIcon } from 'Application/Molecules/Icons/CloseIcon'
import { GetSingleUserDetails } from 'Infrasctructure/store/requests/GetSingleUserDetails'
import { useEffect, useState } from 'react'

import { Box, Grid, IconButton, Typography } from '@mui/material'

import { UserDetailsBox } from '../UserPreview/UserDetailsBox/UserDetailsBox'
import { ImageWrapper, MainImageText } from './MyProfile.styled'

export const MyProfile = () => {
    const { userDetails } = useAuth()
    const [myProfile, setMyProfile] = useState(null)

    const [fetchData] = useFetchData({
        request: GetSingleUserDetails,
        onSuccess: (data) => setMyProfile(data),
        onError: () => {},
    })

    useEffect(() => {
        if (userDetails?.id) fetchData(userDetails?.id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userDetails?.id])

    return (
        <AppLayout headerMenu={profileHeaderMenu} sidebarMenu={PROFILE_SIDEBAR_MENU} hasSideBar={true}>
            <Box sx={{ padding: (theme) => theme.spacing(2.5, 0, 3.5, 2.5) }}>
                <Grid container spacing={5.25}>
                    <Grid item xs={12}>
                        <Typography variant="body2" fontWeight={300} mb={1.5}>
                            Click and drag to re-arrange photo order.
                        </Typography>

                        <Grid container spacing={2.5}>
                            {myProfile?.images.map((img, index) => (
                                <Grid key={img.src} item xs={index === 0 ? 12 : 6} sm="auto">
                                    <ImageWrapper key={img.src}>
                                        <img src={img.src} alt={img.alt} className={index === 0 ? 'main-img' : ''} />

                                        <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
                                            <IconButton>
                                                <CloseIcon height={24} width={24} />
                                            </IconButton>
                                        </Box>
                                        {index === 0 && (
                                            <MainImageText>
                                                <Typography
                                                    variant="body3"
                                                    color="yellow.main"
                                                    fontWeight={500}
                                                    sx={{ margin: (theme) => theme.spacing(1.5, 1.25) }}
                                                >
                                                    Main Image
                                                </Typography>
                                            </MainImageText>
                                        )}
                                    </ImageWrapper>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <UserDetailsBox profile={myProfile} compareInterests={[]} />
                    </Grid>
                </Grid>
            </Box>
        </AppLayout>
    )
}
