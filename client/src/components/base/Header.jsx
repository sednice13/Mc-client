import React from "react";
import mystyles from './styles/mystyles.module.css'
import { AuthContext } from '../account/Authcontext'
import { useContext } from "react";
import { Link } from 'react-router-dom';

const Header = () => {
  const { auth, LogOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    LogOut()
    
  }

  

  return (
    <header className={mystyles.siteHeader}>
      <nav className={mystyles.headerNav}>
        {auth.user && auth.user.sub
          ? (
            <>
              <Link to="/profile" className={mystyles.impactWhite}>Profile</Link>
              <button type="button" className={mystyles.logoutBtn} onClick={handleLogOut}>Logga ut</button>
            </>
            )
          : (
            <>
              <Link to="/create-account" className={mystyles.impactWhite}>Registera</Link>
              <Link to="/login" className={mystyles.impactWhite}>Logga in</Link>
            </>
            )}
      </nav>
    </header>
  );
}

export default Header;
