import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

import { FormHelperText, Radio, RadioGroup } from '@mui/material'

import { StyledRadioLabel } from './index.styled'

export const RadioController = (props) => {
    const { options, name, rules = [], ...rest } = props

    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field: { value: fieldValue, ...fieldRest } }) => (
                <RadioGroup defaultValue="female" aria-labelledby="demo-customized-radios" name="customized-radios">
                    {options.map(({ label, value }) => (
                        <StyledRadioLabel
                            key={value}
                            className={fieldValue === value ? 'active' : ''}
                            {...rest}
                            value={value}
                            {...fieldRest}
                            control={<Radio />}
                            label={label}
                        />
                    ))}
                    {errors[name]?.message && (
                        <FormHelperText sx={{ fontSize: '16px', fontWeight: 600 }} error>
                            {errors[name]?.message}
                        </FormHelperText>
                    )}
                </RadioGroup>
            )}
        />
    )
}

RadioController.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
    options: PropTypes.array,
}
