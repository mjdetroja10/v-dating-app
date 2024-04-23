import { Validations, interestOptions } from 'Application/Constants/SignUpConstant'
import { MultiSelectCheckboxController } from 'Infrasctructure/FormControllers/MultiSelectCheckboxController'

import { Box, Grid, Typography } from '@mui/material'

export const InterestForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    Now, let’s get to know you a little better! Please select up to 8 different interests!
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ backgroundColor: '#fbfdff99', minHeight: '450px', p: 2.5 }}>
                    <MultiSelectCheckboxController
                        name="interests"
                        label="Interests Category"
                        options={interestOptions}
                        rules={Validations.interestsForm.interets}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
