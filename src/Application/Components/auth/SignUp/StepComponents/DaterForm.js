import { Validations } from 'Application/Constants/SignUpConstant'
import { InputController } from 'Infrasctructure/FormControllers/InputController'
import { PasswordController } from 'Infrasctructure/FormControllers/PasswordController'

import { Grid, Typography } from '@mui/material'

export const DaterForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400} mb={7.5}>
                    Hey! Thank you for joining the Valadate community - let’s get started by setting up your account!
                </Typography>
            </Grid>

            <Grid item xs={12} lg={8}>
                <InputController label="First Name" name="firstName" rules={Validations.daterForm.firstName} />
            </Grid>
            <Grid item xs={12} lg={4}>
                <InputController label="Last Name" name="lastName" rules={Validations.daterForm.lastName} />
            </Grid>
            <Grid item xs={12} lg={12}>
                <InputController label="Email" name="email" rules={Validations.daterForm.email} />
            </Grid>
            <Grid item xs={12} lg={12}>
                <PasswordController label="Password" name="password" rules={Validations.daterForm.password} />
            </Grid>
        </Grid>
    )
}
