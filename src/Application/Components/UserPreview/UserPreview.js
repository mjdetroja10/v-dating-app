import { actionList, userDetailList } from 'Application/Constants/DiscoverConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { ProgressBar } from 'Application/Molecules/Atoms/ProgressBar/ProgressBar'
import { matchInterestValue } from 'Application/Utils/GeneralUtils'
import PropTypes from 'prop-types'

import { Box, Grid, Stack, Typography } from '@mui/material'

import { ActionWrapper, Wrapper, InterestBox, YellowBox } from './UserPreview.styled'

export const UserPreview = ({ profile, setActiveProfile }) => {
    const { userDetails } = useAuth()

    return (
        <Box sx={{ position: 'fixed' }}>
            <Wrapper>
                <Grid container spacing={2.5}>
                    <Grid item xs={12}>
                        <Grid container spacing={2.25}>
                            <Grid item xs={6}>
                                <img src={profile?.images[0].src} alt={profile?.images[0].alt} className="main-image" />
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
                {actionList.map(({ title, icon }) => (
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        key={title}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => setActiveProfile('')}
                    >
                        {icon}
                        <Typography variant="body3" fontWeight={300}>
                            {title}
                        </Typography>
                    </Stack>
                ))}
            </ActionWrapper>
        </Box>
    )
}

UserPreview.propTypes = {
    profile: PropTypes.object,
    setActiveProfile: PropTypes.func,
}
