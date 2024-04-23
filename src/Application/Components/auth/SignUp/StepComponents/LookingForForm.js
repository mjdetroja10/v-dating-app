import { Validations, lookingForOptions } from 'Application/Constants/SignUpConstant'
import { RadioController } from 'Infrasctructure/FormControllers/RadioController'

import { Grid, Typography } from '@mui/material'

export const LookingForForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    Looking for a...
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <RadioController
                    name="lookingFor"
                    options={lookingForOptions}
                    rules={Validations.lookingForForm.lookingFor}
                />
            </Grid>
        </Grid>
    )
}
