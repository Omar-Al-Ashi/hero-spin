import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        HeroSpin
      </Link>
      <ul>
        <CustomLink to='/generate/random'>Random Hero Generator</CustomLink>
        <CustomLink to='/generate/select'>Select A Hero Generator</CustomLink>
      </ul>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Header;
