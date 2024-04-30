import { actionList, userDetailList } from 'Application/Constants/DiscoverConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { ProgressBar } from 'Application/Molecules/Atoms/ProgressBar/ProgressBar'
import { matchInterestValue } from 'Application/Utils/GeneralUtils'
import { SendFriendRequest } from 'Infrasctructure/store/requests/SendFriendRequest'
import PropTypes from 'prop-types'
import { Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'

import { Box, Grid, Stack, Typography } from '@mui/material'

import { ActionWrapper, Wrapper, InterestBox, YellowBox, ActionButton, Slider } from './UserPreview.styled'

const handleSuccess = (profile, setDiscoverList, setResponse, setActiveProfile) => (data) => {
    if (data) {
        setResponse((prev) => ({ ...prev, error: '', success: data?.message || 'request sent successfully' }))
        setDiscoverList((list) => list.filter((user) => user._id !== profile._id))
        setActiveProfile(null)
    }
}

const handleError = (setResponse) => (error) => {
    if (error && Array.isArray(error)) {
        setResponse((prev) => ({ ...prev, error: 'Something went wrong', success: '' }))
        return
    }
    setResponse((prev) => ({ ...prev, error, success: '' }))
}

export const UserPreview = ({ profile, setActiveProfile, setDiscoverList, setResponse }) => {
    const { userDetails } = useAuth()

    const [sendRequest, loading] = useFormSubmit({
        request: SendFriendRequest,
        onSuccess: handleSuccess(profile, setDiscoverList, setResponse, setActiveProfile),
        onError: handleError(setResponse),
    })

    return (
        <Box sx={{ position: { xs: 'initial', md: 'fixed' }, width: { xs: '100%', md: 'auto' } }}>
            <Wrapper>
                <Grid container spacing={2.5}>
                    <Grid item xs={12}>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <Slider
                                className="mySwiper"
                                pagination={{
                                    clickable: true,
                                }}
                                slidesPerView={1}
                                grabCursor={true}
                                modules={[Pagination]}
                            >
                                {profile?.images.map((img) => (
                                    <SwiperSlide key={img._id}>
                                        <img src={img.src} alt={img.alt} />
                                    </SwiperSlide>
                                ))}
                            </Slider>
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <Grid container spacing={2.25}>
                                <Grid item xs={6}>
                                    <img
                                        src={profile?.images[0].src}
                                        alt={profile?.images[0].alt}
                                        className="main-image"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid container spacing={2.25}>
                                        {profile?.images.slice(1).map((item) => {
                                            return (
                                                <Grid item xs={6} key={item.src}>
                                                    <img src={item.src} alt={item.alt} className="small-image" />
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <YellowBox>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Stack direction="row" gap={1.5}>
                                    <Typography variant="h4" color="primary.main" fontWeight={600}>
                                        {profile.firstName}
                                    </Typography>
                                    <Typography variant="h4" color="primary.main" fontWeight={400}>
                                        {profile.age}
                                    </Typography>
                                </Stack>

                                <ProgressBar value={matchInterestValue(userDetails?.interests, profile?.interests)} />
                            </Stack>

                            <Stack gap={0.5}>
                                {userDetailList(profile).map(({ title, icon }) => (
                                    <Stack direction="row" alignItems="center" gap={0.75} key={title}>
                                        {icon}
                                        <Typography variant="body2" fontWeight={300} color="black.medium">
                                            {title}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>

                            <Box sx={{ maxWidth: '100%' }}>
                                <Typography variant="body1" fontWeight={400} color="primary.main" mb={1.5}>
                                    Interests
                                </Typography>

                                <Stack direction="row" gap={2.5} sx={{ flexWrap: 'wrap' }}>
                                    {profile.interests.map((interest) => (
                                        <InterestBox
                                            key={interest}
                                            className={userDetails?.interests.includes(interest) ? 'active' : ''}
                                        >
                                            {interest}
                                        </InterestBox>
                                    ))}
                                </Stack>
                            </Box>
                        </YellowBox>
                    </Grid>
                </Grid>
            </Wrapper>
            <ActionWrapper>
                {actionList.map(({ title, icon, status }) => (
                    <ActionButton
                        variant="text"
                        key={title}
                        onClick={() => {
                            sendRequest({
                                senderId: userDetails.id,
                                recieverId: profile._id,
                                status,
                            })
                        }}
                        loading={loading}
                    >
                        {icon}
                        <Typography variant="body3" fontWeight={300}>
                            {title}
                        </Typography>
                    </ActionButton>
                ))}
            </ActionWrapper>
        </Box>
    )
}

UserPreview.propTypes = {
    profile: PropTypes.object,
    setActiveProfile: PropTypes.func,
    setDiscoverList: PropTypes.func,
    setResponse: PropTypes.func,
}
