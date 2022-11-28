import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/nav_bar_styles.css';

function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState();

    function switch_menu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    }, []);

    window.addEventListener('resize', () => {
        window.innerWidth > 600 ?
            setIsDesktop(true) : setIsDesktop(false);
    });

    return (
        <div className="nav_bar" >
            <div className="icon_container menu_switch">
                <div className="back_contrast" style={{color: "#ff4655"}}>
                    {
                        isDesktop ?
                            <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'fas fa-phone'}`} />
                            :
                            <i onClick={switch_menu} className={`${showMenu ? 'fas fa-times' : 'fas fa-bars'}`} />
                    }
                </div>
            </div>

            <div className={`nav_container ${showMenu ? 'menu_active' : null}`}>
                <div className="icon_container logo">
                    <img src={process.env.PUBLIC_URL + "/valorant-master/images/icons/val-symbol.png"} alt="" />
                </div>
                <ul className="menu_items" style={{color: "#ff4655"}}>
                    <li style={{fontFamily: "VALORANT"}}>
                        Contact: +923156627228
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;
