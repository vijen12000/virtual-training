import {useContext} from 'react'
import {ThemeProvider, ThemeContext} from './contexts/ThemeContext'

const Layout = ({initialTheme, children}) => {
    return (
        <ThemeProvider initialTheme={initialTheme}>
            <LayoutWithoutThemeProvider>{children}</LayoutWithoutThemeProvider>
        </ThemeProvider>
    )
}

const LayoutWithoutThemeProvider = ({initialTheme, children}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div
            className={theme === "light"
            ? "container-fluid light"
            : "container-fluid dark"}>            
            {children}
        </div>        
    )
}

export default Layout
