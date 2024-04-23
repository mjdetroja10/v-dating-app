import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { AppLayout } from 'Application/layouts/AppLayout'
import { AlertComponent } from 'Application/Molecules/Atoms/AlertComponent/AlertComponent'
import { Button } from 'Application/Molecules/Atoms/Button/Button'
import { PasswordController } from 'Infrasctructure/FormControllers/PasswordController'
import { ResetPasswordRequest } from 'Infrasctructure/store/requests/ResetPasswordRequest'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Container, Grid } from '@mui/material'

import { Wrapper } from '../SignUp/SignUp.styled'

const schema = yup.object().shape({
    password: yup.string().required().min(8),
    confirmPassword: yup
        .string()
        .required()
        .oneOf([yup.ref('password')], 'Passwords do not match'),
})

const onError = (setError) => (error) => {
    if (Array.isArray(error)) {
        error.forEach(({ param, type, msg }) => {
            setError(param, { type, message: msg })
        })
    }
}
const onSuccess = (setSuccessMessage) => (data) => {
    if (data) {
        setSuccessMessage(data || 'password updated successfully')
    }
}

export const ResetPassword = () => {
    const { code } = useParams()
    const methods = useForm({ defaultValues: { password: '', confirmPassword: '' }, resolver: yupResolver(schema) })
    const [successMessage, setSuccessMessage] = useState('')

    const {
        handleSubmit,
        setError,
        formState: { errors },
        clearErrors,
    } = methods

    const [formSubmit, loading] = useFormSubmit({
        request: ResetPasswordRequest(code),
        onSuccess: onSuccess(setSuccessMessage),
        onError: onError(setError),
    })

    return (
        <AppLayout headerMenu={[]} hasExtraSpace={true}>
            <Wrapper sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <FormProvider {...methods}>
                    <Container component="form" onSubmit={handleSubmit(formSubmit)}>
                        <Grid container spacing={2.5}>
                            {(successMessage || errors?.code?.message) && (
                                <Grid item xs={12}>
                                    <AlertComponent
                                        message={successMessage ? successMessage : 'Token might be expired or invalid'}
                                        type={errors?.code?.message && 'error'}
                                        onClose={() => {
                                            clearErrors()
                                            setSuccessMessage('')
                                        }}
                                    />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <PasswordController name="password" placeholder="Please enter password..." />
                            </Grid>
                            <Grid item xs={12}>
                                <PasswordController
                                    name="confirmPassword"
                                    placeholder="Please enter confirm password..."
                                />
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
