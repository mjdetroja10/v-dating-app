import { FileController } from 'Infrasctructure/FormControllers/FileController'
import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { FormHelperText, Grid, Typography } from '@mui/material'

import { generateImageErrorMessage } from '../Utils'

export const ProfilePicForm = () => {
    const {
        formState: { errors, isSubmitting },
        getValues,
        setError,
    } = useFormContext()

    useEffect(() => {
        const fieldValueLength = getValues('images').filter((x) => x !== null).length
        if (isSubmitting && fieldValueLength < 2) {
            const message = generateImageErrorMessage(fieldValueLength)
            setError('images', { message })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSubmitting, setError])

    return (
        <Grid container spacing={2.5} sx={{ textAlign: { xs: 'center', md: 'start' } }}>
            <Grid item xs={12}>
                <Typography variant="h4" color="black.dark" fontWeight={400} mb={3}>
                    Please add some pictures to your profile (at least two)
                </Typography>
            </Grid>
            <Grid item xs={12}>
                {errors?.images?.message && (
                    <FormHelperText sx={{ fontSize: '16px', fontWeight: 600 }} error>
                        {errors?.images?.message}
                    </FormHelperText>
                )}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FileController name="images[0]" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FileController name="images[1]" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FileController name="images[2]" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FileController name="images[3]" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <FileController name="images[4]" />
            </Grid>
        </Grid>
    )
}
