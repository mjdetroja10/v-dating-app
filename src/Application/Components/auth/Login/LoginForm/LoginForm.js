import { DISCOVER_URL } from 'Application/Constants/RouteConstant'
import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { CheckboxController } from 'Infrasctructure/FormControllers/CheckboxController'
import { StyledLabel } from 'Infrasctructure/FormControllers/index.styled'
import { InputController } from 'Infrasctructure/FormControllers/InputController'
import { PasswordController } from 'Infrasctructure/FormControllers/PasswordController'
import { LoginRequest } from 'Infrasctructure/store/requests/LoginRequest'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Alert, Box, Snackbar, Stack, Typography } from '@mui/material'

import { LoginButton, LoginFormWrapper } from '../Login.styled'

const onSuccess = (navigate) => (data) => {
    if (data.token) {
        localStorage.setItem('token', data.token)
        navigate(DISCOVER_URL)
    }
}

const onError = (setError, setErrorMessage) => (error) => {
    if (Array.isArray(error)) {
        error.forEach(({ param, type, msg }) => {
            setError(param, { type, message: msg })
        })
        return
    }

    setErrorMessage(error)
}

export const LoginForm = () => {
    const methods = useForm({ defaultValues: { email: '', password: '' } })

    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const { handleSubmit, setError } = methods

    const [formSubmit] = useFormSubmit({
        request: LoginRequest,
        onSuccess: onSuccess(navigate),
        onError: onError(setError, setErrorMessage),
    })

    return (
        <FormProvider {...methods}>
            {errorMessage && (
                <Box sx={{ width: 500 }}>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={Boolean(errorMessage)}
                        autoHideDuration={6000}
                        onClose={() => setErrorMessage('')}
                    >
                        <Alert onClose={() => setErrorMessage('')} severity="error" sx={{ minWidth: '250px' }}>
                            {errorMessage}
                        </Alert>
                    </Snackbar>
                </Box>
            )}
            <LoginFormWrapper component="form" onSubmit={handleSubmit(formSubmit)}>
                <Typography variant="h3" color="primary" align="center" mb={7.5}>
                    Welcome Back!
                </Typography>

                <Stack gap={2.5}>
                    <Box>
                        <Box mb={1.25}>
                            <StyledLabel>Email:</StyledLabel>
                        </Box>
                        <InputController name="email" />
                    </Box>
                    <Box>
                        <Stack direction="row" justifyContent="space-between" mb={1.25}>
                            <StyledLabel sx={{ margin: '0 !important' }}>Password:</StyledLabel>
                            <Link>Forgot Password?</Link>
                        </Stack>
                        <PasswordController name="password" />

                        <CheckboxController name="rememberMe" label="Remember Me" />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <LoginButton type="submit">Log In</LoginButton>
                    </Box>
                </Stack>
            </LoginFormWrapper>
        </FormProvider>
    )
}
