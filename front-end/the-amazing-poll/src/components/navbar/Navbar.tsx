import styles from './Navbar.module.scss'

import { useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isMenuActive, setIsMenuActive] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setIsMenuActive(oldState => !oldState)
    }

    const takeMeHome = () => {
        navigate('/')
    }

    const setStyle = ({ isActive }: ActiveLink) => {
        return isActive ? styles.activeLink : ''
    }

    return (
        <div className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div onClick={takeMeHome}><h1 className={styles.brandTitle}>The Amazing Poll</h1></div>
                <a href='#/' className={styles.toggleButton} onClick={handleClick}>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </a>
                <div className={`${styles.navbarLinks} ${isMenuActive ? styles.active : ''}`}>
                    <ul>
                        <li><NavLink className={setStyle} to="/login">Login</NavLink></li>
                        <li><NavLink className={setStyle} to="/register">Register</NavLink></li>
                        <li><NavLink className={setStyle} to="/new-poll">New Poll</NavLink></li>
                        <li><NavLink className={setStyle} to="/logout">Logout</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

interface ActiveLink {
    isActive: boolean;
}

export default Navbar;
