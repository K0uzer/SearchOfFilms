/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function SimpleContainer({ children }: any) {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box
                    sx={{
                        bgcolor: '#cfe8fc',
                        height: '80vh',
                        marginTop: '10vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        border: '1px solid black',
                        borderRadius: '2%',
                    }}
                >
                    {children}
                </Box>
            </Container>
        </>
    )
}
