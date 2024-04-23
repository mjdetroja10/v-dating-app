import { PlusIcon } from 'Application/Molecules/Icons/PlusIcon'
import { theme } from 'Application/Theme'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import { TextField } from '@mui/material'

import { UploadButton } from './index.styled'

const FILE_TYPE = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

const FILE_SIZE = 1024 * 1024 * 24

const handleUploadClick = (setSelectedFile, onChange, setError, clearErrors) => (event) => {
    let file = event.target.files[0]
    let name = event.target.name.split('[')[0]

    if (!FILE_TYPE.includes(file?.type) || file?.size > FILE_SIZE) {
        let message =
            file?.size > FILE_SIZE
                ? 'file size too large'
                : !FILE_TYPE.includes(file?.type)
                ? 'invalid file type please select another file'
                : ''
        setError(name, { message })
        return
    }
    clearErrors()
    setSelectedFile(URL.createObjectURL(file))
    onChange(file)
}

export const FileController = (props) => {
    const [selectedFile, setSelectedFile] = useState('')

    const { name, rules = {}, ...rest } = props

    const { control, setError, clearErrors } = useFormContext()

    return (
        <Controller
            control={control}
            rules={rules}
            name={name}
            // eslint-disable-next-line no-unused-vars
            render={({ field: { value, onChange, ...fieldRest } }) => (
                <>
                    <TextField
                        accept="image/*"
                        id={'contained-button-file-' + name}
                        type="file"
                        sx={{
                            display: 'none',
                        }}
                        onChange={handleUploadClick(setSelectedFile, onChange, setError, clearErrors)}
                        {...fieldRest}
                        {...rest}
                    />
                    <label htmlFor={'contained-button-file-' + name}>
                        <UploadButton component="span" sx={{ padding: selectedFile ? 0 : theme.spacing(18, 12) }}>
                            {selectedFile ? (
                                <img src={selectedFile} alt="profile-pic" />
                            ) : (
                                <PlusIcon width={35} height={35} />
                            )}
                        </UploadButton>
                    </label>
                </>
            )}
        />
    )
}

FileController.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    rules: PropTypes.object,
}
