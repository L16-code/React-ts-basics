import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>
            TEHME CONTEXT
        </div>
    )
}

export default Box