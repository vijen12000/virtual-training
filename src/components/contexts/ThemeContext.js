import {createContext, useState} from 'react'

export const ThemeContext = createContext()

const ThemeProvider = ({children, initialTheme}) => {
    const [theme,
        setTheme] = useState(initialTheme)

    return (
        <ThemeContext.Provider
            value={{
            setTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider}
