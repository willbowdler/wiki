import { Column, Row } from '@skeleton';

import TransParentLogo from '@assets/logo_transparent.png';
import Link from './Link';
import './Navigation.css';

type NavigationLink = { name: string; href: string; target?: string };

const navigationLinks: NavigationLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Topics', href: '/topics' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function Navigation() {
  return (
    <Column>
      <TransParentLogo />
      <Row gap={5}>
        {navigationLinks.map((link) => (
          <Link href={link.href}>{link.name}</Link>
        ))}
      </Row>
    </Column>
  );
}

export default Navigation;
