import {ThemeContext} from '../App'
import {useContext} from 'react'

const Header = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <div className='padT4 padB4'>
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="/images/svccLogo.png" alt="SVCC Home Page"/>
                    </div>
                    <div className="light">
                        <h4 className="header-title">
                            Sillicon Valley Code Camp
                        </h4>
                    </div>
                    <div
                        className={theme === "dark"
                        ? "text-info"
                        : ""}>
                        Hello Mr. Xyz &nbsp;&nbsp;
                        <span>
                            <a href="#">Sign-Out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
