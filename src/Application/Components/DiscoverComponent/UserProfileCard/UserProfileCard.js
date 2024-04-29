import { useAuth } from 'Application/Hooks/useAuth'
import { ProgressBar } from 'Application/Molecules/Atoms/ProgressBar/ProgressBar'
import { matchInterestValue } from 'Application/Utils/GeneralUtils'
import PropTypes from 'prop-types'

import { Stack, Typography } from '@mui/material'

import { CardContent, UserCard, ViewProfileWrapper } from './UserProfileCard.styled'

export const UserProfileCard = ({ user = null, setActiveProfile }) => {
    const { userDetails } = useAuth()

    if (!user) return null

    return (
        <UserCard sx={{ backgroundImage: `url("${user?.images[0].src}")` }} onClick={() => setActiveProfile(user)}>
            <ViewProfileWrapper className="view-profile">
                <Typography variant="h5" color="white.main" fontWeight={600}>
                    View Profile
                </Typography>
            </ViewProfileWrapper>
            <CardContent>
                <Stack p={1.5}>
                    <Stack direction={'row'} gap={1} mb={1.5}>
                        <Typography variant="body1" color="white.main" fontWeight={600}>
                            {user.firstName}
                        </Typography>
                        <Typography variant="body1" color="white.main">
                            {user.age}
                        </Typography>
                    </Stack>
                    <Typography variant="body3" color="white.main" mb={1}>
                        5 Shared Interests
                    </Typography>
                    <Typography variant="body3" color="secondary.dark" fontWeight={500}>
                        2 Common Threads
                    </Typography>
                </Stack>
                <ProgressBar value={matchInterestValue(userDetails?.interests, user?.interests)} />
            </CardContent>
        </UserCard>
    )
}

UserProfileCard.propTypes = {
    user: PropTypes.object,
    setActiveProfile: PropTypes.func,
}
