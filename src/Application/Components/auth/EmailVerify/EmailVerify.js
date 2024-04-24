import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { AppLayout } from 'Application/layouts/AppLayout'
import { EmailVerifyRequest } from 'Infrasctructure/store/requests/EmailVerifyRequest'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Alert, Container, Grid } from '@mui/material'

import { Wrapper } from '../SignUp/SignUp.styled'

const onError = (setError) => (error) => {
    if (Array.isArray(error)) {
        error.forEach(({ msg }) => {
            setError(msg)
        })

        return
    }

    setError(error)
}
const onSuccess = (setSuccessMessage) => (data) => {
    if (data) {
        setSuccessMessage(data || 'email verify sucesssfully')
    }
}

export const EmailVerify = () => {
    const param = useParams()
    const [successMessage, setSuccessMessage] = useState('')
    const [error, setError] = useState('')

    const [formSubmit] = useFormSubmit({
        request: EmailVerifyRequest,
        onSuccess: onSuccess(setSuccessMessage),
        onError: onError(setError),
    })

    useEffect(() => {
        formSubmit(param)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <AppLayout headerMenu={[]} hasExtraSpace={true}>
            <Wrapper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Container>
                    <Grid container spacing={2.5} sx={{ justifyContent: 'center' }}>
                        <Grid item xs={8}>
                            {(error || successMessage) && (
                                <Alert severity={error ? 'error' : successMessage ? 'success' : ''}>
                                    {error ? error : successMessage ? successMessage : ''}
                                </Alert>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Wrapper>
        </AppLayout>
    )
}
