import {createContext} from 'react'
import {useTheme} from '../hook/useTheme'
export const ThemeContext = createContext()

const ThemeProvider = ({children, initialTheme}) => {
    const {theme, setTheme} = useTheme(initialTheme)

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
