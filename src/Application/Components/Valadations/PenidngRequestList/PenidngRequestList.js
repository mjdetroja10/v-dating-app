import { useFetchData } from 'Application/Hooks/useFetchData'
import { ExpandMoreIcon } from 'Application/Molecules/Icons/ExpandMoreIcon'
import { GetPendingRequestList } from 'Infrasctructure/store/requests/GetPendingRequestList'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

import { Accordion, AccordionActions, Alert, Box, Button, CircularProgress, Typography } from '@mui/material'

import { AccordionContent } from '../Valadations.styled'

export const PenidngRequestList = () => {
    const [pendingRequestList, setPendingRequestList] = useState([])
    const [error, setError] = useState('')

    const [getPendingRequests, loading] = useFetchData({
        request: GetPendingRequestList,
        onSuccess: (data) => setPendingRequestList(data),
        onError: (error) => {
            let errMsg = error && Array.isArray(error) ? 'something went wrong' : error
            setError(errMsg)
        },
    })

    useEffect(() => {
        getPendingRequests()
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
                                <Button color="success" variant="contained">
                                    Accept
                                </Button>
                                <Button color="error" variant="contained">
                                    Reject
                                </Button>
                            </AccordionActions>
                        </Accordion>
                    ))
                ) : (
                    <Box sx={{ textAlign: 'center' }}>
                        {loading ? (
                            <CircularProgress />
                        ) : (
                            <Typography variant="h5" color="primary.main" fontWeight={500} mb={2.5}>
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
    pendingRequestList: PropTypes.array,
    loading: PropTypes.bool,
}
