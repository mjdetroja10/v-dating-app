import { userDetailList } from 'Application/Constants/DiscoverConstant'
import { ProgressBar } from 'Application/Molecules/Atoms/ProgressBar/ProgressBar'
import { matchInterestValue } from 'Application/Utils/GeneralUtils'
import PropTypes from 'prop-types'

import { Box, Stack, Typography } from '@mui/material'

import { InterestBox, YellowBox } from '../UserPreview.styled'

export const UserDetailsBox = ({ profile, compareInterests = [] }) => {
    if (!profile) return null

    return (
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

                <ProgressBar value={matchInterestValue(profile?.interests, compareInterests)} />
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
                        <InterestBox key={interest} className={compareInterests.includes(interest) ? 'active' : ''}>
                            {interest}
                        </InterestBox>
                    ))}
                </Stack>
            </Box>
        </YellowBox>
    )
}

UserDetailsBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    compareInterests: PropTypes.array,
}
