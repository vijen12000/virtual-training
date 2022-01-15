import {useState, createContext} from 'react'
export const ThemeContext = createContext();
const Layout = ({initialTheme, children}) => {
    const [theme,
        setTheme] = useState(initialTheme)
    return (
        <ThemeContext.Provider
            value={{
            setTheme,
            theme
        }}>
            <div
                className={theme === "light"
                ? "container-fluid light"
                : "container-fluid dark"}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default Layout
