import { commonHeaderMenu } from 'Application/Constants/HeaderConstant'
import { AppLayout } from 'Application/layouts/AppLayout'

import { Box, Grid } from '@mui/material'

import { LoginFrame } from './Login.styled'
import { LoginForm } from './LoginForm/LoginForm'

export const Login = () => {
    return (
        <AppLayout headerMenu={commonHeaderMenu} hasExtraSpace={true}>
            <Box sx={{ height: '100vh', overflow: 'hidden' }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <LoginFrame src="/images/login-frame.png" alt="login-frame" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <LoginForm />
                    </Grid>
                </Grid>
            </Box>
        </AppLayout>
    )
}
