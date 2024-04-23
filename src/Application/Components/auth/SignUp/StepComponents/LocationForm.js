import { Validations } from 'Application/Constants/SignUpConstant'
import { InputController } from 'Infrasctructure/FormControllers/InputController'

import { Grid, Typography } from '@mui/material'

export const LocationForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    I live in
                </Typography>
            </Grid>

            <Grid item xs={12} lg={6}>
                <InputController label="City" name="city" rules={Validations.locationForm.city} />
            </Grid>
            <Grid item xs={12} lg={3}>
                <InputController label="State" name="state" rules={Validations.locationForm.state} />
            </Grid>
            <Grid item xs={12} lg={3}>
                <InputController type="number" label="Zip Code" name="zip" rules={Validations.locationForm.zip} />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    I’m looking for someone within
                </Typography>
            </Grid>

            <Grid item xs={12} lg={3}>
                <InputController name="miles" type="number" label="miles" rules={Validations.locationForm.miles} />
            </Grid>
            <Grid item xs={12} lg={3}>
                <InputController
                    name="birthDate"
                    type="date"
                    label="Birthdate"
                    rules={Validations.locationForm.birthdate}
                />
            </Grid>
        </Grid>
    )
}
