import { useFetchData } from 'Application/Hooks/useFetchData'
import { MyFriendsRequest } from 'Infrasctructure/store/requests/MyFriendsRequest'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import {
    Alert,
    Avatar,
    Box,
    CircularProgress,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material'

export const MyFriends = ({ reloadMyFriends, setReloadMyFriends }) => {
    const [myFriendsList, setMyFriendsList] = useState([])

    const [error, setError] = useState('')

    const [fetchRequest, loading] = useFetchData({
        request: MyFriendsRequest,
        onSuccess: (data) => setMyFriendsList(data),
        onError: (error) => {
            let errMsg = error && Array.isArray(error) ? 'something went wrong' : error
            setError(errMsg)
        },
    })

    useEffect(() => {
        fetchRequest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (reloadMyFriends) {
            setReloadMyFriends(false)
            fetchRequest()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [reloadMyFriends])

    return (
        <Box>
            <Typography variant="h5" color="primary.main" fontWeight={500} mb={2.5}>
                My Friends
            </Typography>
            <Box>
                {error && (
                    <Box mb={2.5}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )}
                <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {myFriendsList.length > 0 ? (
                        myFriendsList.map((myFrd) => {
                            return (
                                <ListItem key={myFrd._id} disablePadding>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar
                                                src={myFrd?.frd?.images[0].src}
                                                alt={myFrd?.frd?.images[0].alt}
                                                sx={{ '& img': { objectPosition: 'center top' } }}
                                            />
                                        </ListItemAvatar>
                                        <ListItemText primary={`${myFrd?.frd?.firstName} ${myFrd?.frd?.lastName}`} />
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    ) : (
                        <Box sx={{ textAlign: 'center' }}>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Typography variant="h5" fontWeight={500} mb={2.5}>
                                    No Friends Availble
                                </Typography>
                            )}
                        </Box>
                    )}
                </List>
            </Box>
        </Box>
    )
}

MyFriends.propTypes = {
    reloadMyFriends: PropTypes.bool,
    setReloadMyFriends: PropTypes.func,
}
