import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { AppLayout } from 'Application/layouts/AppLayout'
import { AlertComponent } from 'Application/Molecules/Atoms/AlertComponent/AlertComponent'
import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { InputController } from 'Infrasctructure/FormControllers/InputController'
import { ForgotPasswordRequest } from 'Infrasctructure/store/requests/ForgotPasswordRequest'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Box, Container, Grid } from '@mui/material'

import { Wrapper } from '../SignUp/SignUp.styled'

const onError = (setError) => (error) => {
    if (Array.isArray(error)) {
        error.forEach(({ param, type, msg }) => {
            setError(param, { type, message: msg })
        })
    }
}
const onSuccess = (setSuccessMessage) => (data) => {
    if (data) {
        setSuccessMessage(data || 'please kindly check your mail')
    }
}

export const ForgotPassoword = () => {
    const methods = useForm({ defaultValues: { email: '' } })
    const [successMessage, setSuccessMessage] = useState('')

    const { handleSubmit, setError } = methods

    const [formSubmit, loading] = useFormSubmit({
        request: ForgotPasswordRequest,
        onSuccess: onSuccess(setSuccessMessage),
        onError: onError(setError),
    })

    return (
        <AppLayout headerMenu={[]} hasExtraSpace={true}>
            <Wrapper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {successMessage && <AlertComponent message={successMessage} onClose={() => setSuccessMessage('')} />}
                <FormProvider {...methods}>
                    <Container component="form" onSubmit={handleSubmit(formSubmit)}>
                        <Grid container spacing={2.5}>
                            <Grid item xs={12}>
                                <InputController name="email" placeholder="Please enter your email..." />
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Button type="submit" loading={loading}>
                                        submit
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </FormProvider>
            </Wrapper>
        </AppLayout>
    )
}
