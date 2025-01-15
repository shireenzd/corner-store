import react from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'


function Header() {
    return (
        <>
            <header>
                <nav className="flex justify-between items-center pr-8">
                    <img src="/Logo.png" alt="Logo" className="w-60" />
                    <h1 className="header-text text-3xl">Where Comfort Meets Style.</h1>
                    <FontAwesomeIcon icon={faCircleUser} size="2xl" style={{color: '#be9f5c'}} />
                </nav>
            </header>
        </>
    )
}

export default Header;