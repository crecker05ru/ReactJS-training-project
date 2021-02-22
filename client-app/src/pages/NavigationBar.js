import {NavLink} from "react-router-dom";

export const NavigationBar = () => {
    return (
        <div className="navigation">
            <nav className="nav__menu">
                <div className="nav__list">
                    <span>
                        <NavLink to="/news" className="nav__link">News</NavLink>
                    </span>
                    <span>
                        <NavLink to="/home" className="nav__link">Home</NavLink>
                    </span>
                    <span>
                        <NavLink to="/gallery" className="nav__link" >Gallery</NavLink>
                    </span>
                    <span>
                        <NavLink to="/routes" className="nav__link">Routes</NavLink>
                    </span>
                    <span>
                        <NavLink to="/tools" className="nav__link">Tools</NavLink>
                    </span>
                    <span>
                        <NavLink to="/main" className="nav__link">Main</NavLink>
                    </span>
                    <div className="nav__burger">

                    </div>
                </div>
            </nav>
        </div>
    )
}