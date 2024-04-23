import { HiddenIcon } from 'Application/Molecules/Icons/HiddenIcon'
import { VisibleIcon } from 'Application/Molecules/Icons/VisibleIcon'
import PropTypes from 'prop-types'
import { Fragment, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { IconButton, InputLabel } from '@mui/material'

import { StyledInput } from './index.styled'

export const PasswordController = (props) => {
    const { label, rules = [], name, ...rest } = props

    const [showPassowrd, setShowPassword] = useState(false)

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
                    <InputLabel sx={{ color: errors[name]?.message ? 'red' : 'black.main', mb: 0.5, fontSize: '20px' }}>
                        {label}
                    </InputLabel>
                    <StyledInput
                        variant="outlined"
                        fullWidth
                        type={showPassowrd ? 'text' : 'password'}
                        error={Boolean(errors[name]?.message)}
                        helperText={errors[name] && errors[name]?.message}
                        {...rest}
                        {...field}
                        InputProps={{
                            endAdornment: (
                                <IconButton onClick={() => setShowPassword(!showPassowrd)} sx={{ p: 0 }}>
                                    {showPassowrd ? (
                                        <HiddenIcon height={18} width={20} />
                                    ) : (
                                        <VisibleIcon height={14} width={20} />
                                    )}
                                </IconButton>
                            ),
                        }}
                    />
                </Fragment>
            )}
        />
    )
}

PasswordController.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
}
