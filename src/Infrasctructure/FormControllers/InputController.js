import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { InputLabel } from '@mui/material'

import { StyledInput } from './index.styled'

export const InputController = (props) => {
    const { label, name, type = 'text', rules = [], ...rest } = props

    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field }) => (
                <Fragment>
                    {label && (
                        <InputLabel
                            sx={{ color: errors[name]?.message ? 'red' : 'black.main', mb: 0.5, fontSize: '20px' }}
                        >
                            {label}
                        </InputLabel>
                    )}
                    <StyledInput
                        type={type}
                        {...rest}
                        helperText={errors[name] && errors[name]?.message}
                        {...field}
                        error={Boolean(errors[name]?.message)}
                        variant="outlined"
                        name={name}
                        fullWidth
                    />
                </Fragment>
            )}
        />
    )
}

InputController.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
}
