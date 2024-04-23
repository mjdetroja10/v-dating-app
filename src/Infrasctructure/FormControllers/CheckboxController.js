import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox, FormControlLabel } from '@mui/material'

export const CheckboxController = (props) => {
    const { name, label, rules = {}, ...rest } = props

    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            render={({ field }) => (
                <FormControlLabel
                    {...field}
                    {...rest}
                    control={<Checkbox />}
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '20px',
                            color: 'black.dark',
                        },
                    }}
                    label={label}
                />
            )}
        />
    )
}

CheckboxController.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
}
