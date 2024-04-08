import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

export default function BasicSelect() {
    const [countElement, setCountElement] = React.useState('')

    const handleChange = (event: SelectChangeEvent) => {
        setCountElement(event.target.value as string)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                    Количество элементов
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={countElement}
                    label="Количество элементов"
                    onChange={handleChange}
                >
                    <MenuItem value={''}>0</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={30}>20</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}
