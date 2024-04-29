import { STATUS } from 'Application/Constants/DiscoverConstant'
import { useAuth } from 'Application/Hooks/useAuth'
import { useFetchData } from 'Application/Hooks/useFetchData'
import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { ExpandMoreIcon } from 'Application/Molecules/Icons/ExpandMoreIcon'
import { AcceptRejectRequest } from 'Infrasctructure/store/requests/AcceptRejectRequest'
import { GetPendingRequestList } from 'Infrasctructure/store/requests/GetPendingRequestList'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { Accordion, AccordionActions, Alert, Box, Button, CircularProgress, Typography } from '@mui/material'

import { AccordionContent } from '../Valadations.styled'

const valadationActionButtons = [
    { title: 'Accept', color: 'success', status: STATUS.accept },
    { title: 'Reject', color: 'error', status: STATUS.rejected },
]

const handleSuccess = (setPendingRequestList, setReloadMyFriends) => (data) => {
    if (data) {
        setPendingRequestList((prev) => prev.filter((user) => user?._id !== data))
        setReloadMyFriends(true)
    }
}

const handleError = (setError) => (error) => {
    let errMsg = error && Array.isArray(error) ? 'something went wrong' : error
    setError(errMsg)
}

export const PenidngRequestList = ({ setReloadMyFriends }) => {
    const [pendingRequestList, setPendingRequestList] = useState([])
    const [error, setError] = useState('')

    const { userDetails } = useAuth()

    const [pendingRequests, loading] = useFetchData({
        request: GetPendingRequestList,
        onSuccess: (data) => setPendingRequestList(data),
        onError: handleError(setError),
    })

    const [friendRequest, requestLoading] = useFormSubmit({
        request: AcceptRejectRequest,
        onSuccess: handleSuccess(setPendingRequestList, setReloadMyFriends),
        onError: handleError(setError),
    })

    useEffect(() => {
        pendingRequests()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Box>
            <Typography variant="h5" color="primary.main" fontWeight={500} mb={2.5}>
                Valadation Requests
            </Typography>
            <Box>
                {error && (
                    <Box mb={2.5}>
                        <Alert severity="error">{error}</Alert>
                    </Box>
                )}
                {pendingRequestList.length > 0 ? (
                    pendingRequestList.map((user) => (
                        <Accordion key={user?._id}>
                            <AccordionContent expandIcon={<ExpandMoreIcon height={40} width={40} />}>
                                <img src={user?.images[0]?.src} alt={user?.images[0]?.alt} />
                                <Typography variant="h5" fontWeight={400}>
                                    {`${user?.firstName} ${user?.lastName}`}
                                </Typography>
                            </AccordionContent>

                            <AccordionActions sx={{ justifyContent: 'start' }}>
                                {valadationActionButtons.map(({ title, color, status }) => (
                                    <Button
                                        color={color}
                                        variant="contained"
                                        key={title}
                                        onClick={() => {
                                            friendRequest({
                                                senderId: userDetails?.id,
                                                recieverId: user?._id,
                                                status: status,
                                            })
                                        }}
                                        loading={requestLoading}
                                    >
                                        {title}
                                    </Button>
                                ))}
                            </AccordionActions>
                        </Accordion>
                    ))
                ) : (
                    <Box sx={{ textAlign: 'center' }}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            <Typography variant="h5" fontWeight={500} mb={2.5}>
                                No Request Available
                            </Typography>
                        )}
                    </Box>
                )}
            </Box>
        </Box>
    )
}

PenidngRequestList.propTypes = {
    setReloadMyFriends: PropTypes.func,
}
