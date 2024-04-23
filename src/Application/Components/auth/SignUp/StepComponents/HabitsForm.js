import { Validations, habitOptions } from 'Application/Constants/SignUpConstant'
import { MultiSelectCheckboxController } from 'Infrasctructure/FormControllers/MultiSelectCheckboxController'
import { SliderController } from 'Infrasctructure/FormControllers/SliderController'

import { Box, Grid, Typography } from '@mui/material'

export const HabitsForm = () => {
    return (
        <Grid container spacing={2.5}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400}>
                    Great! Now, when you’re looking for your perfect match, do you have any deal breakers?
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Box sx={{ backgroundColor: '#fbfdff99', minHeight: '450px', p: 2.5 }}>
                    <Box sx={{ maxWidth: 300, mb: 3 }}>
                        <SliderController label="Age Range" name="ageRange" />
                    </Box>

                    <MultiSelectCheckboxController
                        name="habits"
                        label="Party Habits"
                        options={habitOptions}
                        rules={Validations.habitForm.habits}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}
