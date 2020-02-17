import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserFriends, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const BottomNav = () => {
    const [activeIcon, setActiveIcon] = useState(false)

    

    return (
        <div className="bottom-nav">
            <div className="nav-option">
                <FontAwesomeIcon icon={faHome} size="lg" className={activeIcon ? "active" : "inactive"}/>
                <NavLink to="/" activeClassName="is-active" className="nav-item" exact={true}>HOME</NavLink>
            </div>
            <div className="nav-option">
                <FontAwesomeIcon icon={faUserFriends} size="lg" className={activeIcon ? "active" : "inactive"}/>
                <NavLink to="/teams" activeClassName="is-active" className="nav-item">TEAMS</NavLink>
            </div>
            <div className="nav-option">
                <FontAwesomeIcon icon={faStarHalfAlt} size="lg" className={activeIcon ? "active" : "inactive"}/>
                <NavLink to="/rating" activeClassName="is-active" className="nav-item">RATING</NavLink>
            </div>
        </div>
    )
}

export default BottomNav