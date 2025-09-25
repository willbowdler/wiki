import { GiHamburgerMenu } from 'react-icons/gi';

import { Row } from '@skeleton';

import './Navigation.css';
import { NavLink } from 'react-router';

type NavigationLink = { name: string; href: string; target?: string };

// TODO I feel like there must be a better way to store nav-link data
const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Topics', href: '/topics' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function Navigation() {
  return (
    <Row alignItems="center" justifyContent="space-around">
      <Row gap={4} justifyContent="space-between">
        {navigationLinks.map((link) => (
          <NavLink className="link" to={link.href}>
            {link.name}
          </NavLink>
        ))}
      </Row>
      <GiHamburgerMenu className="hamburger" />
    </Row>
  );
}

export default Navigation;
