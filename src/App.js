import './App.css';
import {useState, createContext} from 'react'
import Speakers from './components/Speakers';
import Header from './components/Header';

export const ThemeContext = createContext();

const App = () => {
    const [theme,
        setTheme] = useState("light")

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
                <Header/>
                <Speakers/>
            </div>
        </ThemeContext.Provider>
    )
}

export default App
