import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import Loading from '../common/Loading';

const Header = ({loading}) => {
  return (
    <header>
      <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <Link to="/about" activeClassName="active">About</Link>
        {" | "}
        <Link to="/courses" activeClassName="active">Courses</Link>
      </nav>
      {loading && <Loading interval={100} dots={20} />}
    </header>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
