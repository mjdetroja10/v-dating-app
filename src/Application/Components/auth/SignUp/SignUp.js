import { HOME_URL, LOGIN_URL } from 'Application/Constants/RouteConstant'
import { fieldInitalValue, stepComponentError } from 'Application/Constants/SignUpConstant'
import { useFormSubmit } from 'Application/Hooks/useFormSubmit'
import { AppLayout } from 'Application/layouts/AppLayout'
import { SignUpRequest } from 'Infrasctructure/store/requests/SignUpRequest'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { CircularProgress, Container, Stack } from '@mui/material'

import { ProgressBar, StyledButton, Wrapper } from './SignUp.styled'
import { StepComponents } from './StepComponents'

const handlePrevStep = (step, setStep, navigate) => () => {
    if (step === 1) {
        navigate(HOME_URL)
        return
    }
    setStep((prev) => prev - 1)
}

const handleSignUp = (step, setStep, formSubmit) => async (params) => {
    if (step === 7) {
        await formSubmit(params)
        return
    }

    setStep((prev) => prev + 1)
}

const handleSuccess = (navigate) => (data) => {
    if (data) {
        navigate(LOGIN_URL)
    }
}

const handleError = (setError, setStep) => (err) => {
    let success = ''
    if (err && Array.isArray(err)) {
        Object.keys(stepComponentError).forEach((key) => {
            err.forEach(({ param, type, msg }) => {
                if (stepComponentError[key].includes(param) && (success === key || success === '')) {
                    success = key
                    setStep(parseInt(key))
                    setError(param, { type: type, message: msg })
                }
            })
        })
    }
}

export const SignUp = () => {
    const [step, setStep] = useState(1)
    const methods = useForm({ defaultValues: fieldInitalValue })

    const navigate = useNavigate()

    const { handleSubmit, setError } = methods

    const [formSubmit, loading] = useFormSubmit({
        request: SignUpRequest,
        onSuccess: handleSuccess(navigate),
        onError: handleError(setError, setStep),
    })

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleSignUp(step, setStep, formSubmit))}>
                <AppLayout
                    headerChildren={
                        <Stack direction={'row'} sx={{ gap: { xs: 1.25, md: 3.25 } }}>
                            <StyledButton onClick={handlePrevStep(step, setStep, navigate)}>Go Back</StyledButton>
                            <StyledButton
                                type="submit"
                                disabled={loading}
                                endIcon={loading && <CircularProgress size={25} />}
                            >
                                Continue
                            </StyledButton>
                        </Stack>
                    }
                >
                    <Wrapper>
                        <ProgressBar
                            variant="determinate"
                            value={0}
                            sx={{
                                background: `linear-gradient(${(step * 180) / 7}deg, #145CA8 0%, #B5D4F6 ${
                                    (step * 100) / 7
                                }%)`,
                            }}
                        />
                        <Container>
                            <StepComponents step={step} />
                        </Container>
                    </Wrapper>
                </AppLayout>
            </form>
        </FormProvider>
    )
}
