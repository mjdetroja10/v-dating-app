import { Validations, genderOptions } from 'Application/Constants/SignUpConstant'
import { RadioController } from 'Infrasctructure/FormControllers/RadioController'

import { Grid, Typography } from '@mui/material'

export const GenderForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    I am a...
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <RadioController name="gender" options={genderOptions} rules={Validations.genderForm.gender} />
            </Grid>
        </Grid>
    )
}
