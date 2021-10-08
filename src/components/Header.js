import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Cars</h1>
            <hr />
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Cars List
                </NavLink><br />
                <NavLink to="/add" className="link" activeClassName="active">
                    Add Car
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
