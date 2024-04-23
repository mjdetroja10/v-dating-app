import { DISCOVER_URL, FORGOT_PASSWORD_URL } from 'Application/Constants/RouteConstant'
import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { AlertComponent } from 'Application/Molecules/Atoms/AlertComponent/AlertComponent'
import { CheckboxController } from 'Infrasctructure/FormControllers/CheckboxController'
import { StyledLabel } from 'Infrasctructure/FormControllers/index.styled'
import { InputController } from 'Infrasctructure/FormControllers/InputController'
import { PasswordController } from 'Infrasctructure/FormControllers/PasswordController'
import { LoginRequest } from 'Infrasctructure/store/requests/LoginRequest'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

import { Box, Stack, Typography } from '@mui/material'

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

    const [formSubmit, loading] = useFormSubmit({
        request: LoginRequest,
        onSuccess: onSuccess(navigate),
        onError: onError(setError, setErrorMessage),
    })

    return (
        <FormProvider {...methods}>
            {errorMessage && <AlertComponent message={errorMessage} type="error" onClose={() => setErrorMessage('')} />}
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
                            <Link to={FORGOT_PASSWORD_URL}>Forgot Password?</Link>
                        </Stack>
                        <PasswordController name="password" />

                        <CheckboxController name="rememberMe" label="Remember Me" />
                    </Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <LoginButton type="submit" loading={loading}>
                            Log In
                        </LoginButton>
                    </Box>
                </Stack>
            </LoginFormWrapper>
        </FormProvider>
    )
}
