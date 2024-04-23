import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

import { Slider } from '@mui/material'

import { StyledLabel } from './index.styled'

const minDistance = 10
function valuetext(value) {
    return `${value}°C`
}

const handleChange2 = (onChange) => (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
        return
    }

    if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 100 - minDistance)
            onChange([clamped, clamped + minDistance])
        } else {
            const clamped = Math.max(newValue[1], minDistance)
            onChange([clamped - minDistance, clamped])
        }
    } else {
        onChange(newValue)
    }
}

export const SliderController = (props) => {
    const { name, rules = [], label, ...rest } = props

    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field: { value = [20, 37], onChange, ...fieldRest } }) => (
                <div>
                    <StyledLabel component="legend">{label}</StyledLabel>
                    <Slider
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value}
                        {...rest}
                        {...fieldRest}
                        onChange={handleChange2(onChange)}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        disableSwap
                    />
                </div>
            )}
        />
    )
}

SliderController.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
}
