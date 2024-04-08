import * as React from 'react'
import Fab from '@mui/material/Fab'
import NavigationIcon from '@mui/icons-material/Navigation'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FloatingActionButtonExtendedSize({ children }: any) {
    return (
        <Fab variant="extended" size="small" color="primary">
            <NavigationIcon sx={{ mr: 1 }} />
            {children}
        </Fab>
    )
}
