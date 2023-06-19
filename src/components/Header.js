import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'


const Header = (props) => {

    

    return (

    <header id="header" className="alt">
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:void(0)">Menu</a>
        </nav>
        <Link to="https://jconline.tech/" className="logo"><strong>JC PORTFOLIO</strong> </Link>
      
      
    </header>
    )
}

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
