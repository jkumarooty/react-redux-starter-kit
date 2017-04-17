import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
        <IndexLink to="/home" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/search" activeClassName="active">Search</Link>
    </nav>
  );
};

export default Header;