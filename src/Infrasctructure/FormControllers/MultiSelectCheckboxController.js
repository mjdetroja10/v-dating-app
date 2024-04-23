import PropTypes from 'prop-types'
import { Fragment } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox, FormGroup, FormHelperText } from '@mui/material'

import { StyledCheckboxLabel, StyledLabel } from './index.styled'

const handleCustomOnChange = (value, fieldValue, onChange) => () => {
    let result = []
    if (fieldValue.includes(value)) {
        result = fieldValue.filter((x) => x !== value)
    } else {
        result = fieldValue.concat([value])
    }

    onChange(result)
}

export const MultiSelectCheckboxController = (props) => {
    const { label, options, name, rules = [] } = props

    const {
        control,
        formState: { errors },
    } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field: { value: fieldValue = [], onChange, ...fieldRest } }) => (
                <Fragment>
                    {label && <StyledLabel component="legend">{label}</StyledLabel>}
                    <FormGroup sx={{ flexDirection: 'row', gap: { xs: 2.5, md: 5 }, padding: 1 }}>
                        {options.map(({ label, value }) => (
                            <StyledCheckboxLabel
                                key={value}
                                {...fieldRest}
                                className={fieldValue.indexOf(value) !== -1 ? 'active' : ''}
                                onChange={handleCustomOnChange(value, fieldValue, onChange)}
                                control={<Checkbox defaultChecked />}
                                label={label}
                            />
                        ))}
                    </FormGroup>
                    {errors[name]?.message && (
                        <FormHelperText sx={{ fontSize: '16px', fontWeight: 600 }} error>
                            {errors[name]?.message}
                        </FormHelperText>
                    )}
                </Fragment>
            )}
        />
    )
}

MultiSelectCheckboxController.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
    options: PropTypes.array,
}
