import {useState} from 'react'

const useTheme = (initialTheme = "light") => {
    const [theme,
        setTheme] = useState(initialTheme)

    function validateTheme(themeValue) {
        if (themeValue === "dark") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return {theme, setTheme: validateTheme}
}

export  {useTheme}
