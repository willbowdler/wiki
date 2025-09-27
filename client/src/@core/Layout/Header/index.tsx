import { Link } from 'react-router';
import { MdSearch } from 'react-icons/md';

import { Anchor, Autocomplete, Group } from '@mantine/core';

const links = [
  { home: true, link: '/', label: 'Home' },
  { link: '/topics', label: 'Topics' },
  { link: '/about', label: 'About' },
  { link: '/contact', label: 'Contact' },
];

function Header() {
  return (
    // TODO determine if there is a way that we can normalize global margins/padding a bit
    <Group h="100%" align="center" justify="flex-end" gap={20} mr={'xl'}>
      {/* TODO create responsive menu */}
      <Group>
        {links.map((link) => {
          return (
            // TODO implement hover styles, the Mantine way
            <Anchor
              c="bright"
              key={link.label}
              component={Link}
              to={link.link}
              underline="never"
            >
              {link.label}
            </Anchor>
          );
        })}
      </Group>
      <Group>
        <Autocomplete
          placeholder="Search"
          leftSection={<MdSearch size={16} />}
          data={[
            'React',
            'Angular',
            'Vue',
            'Next.js',
            'Riot.js',
            'Svelte',
            'Blitz.js',
          ]}
          visibleFrom="xs"
        />
      </Group>
    </Group>
  );
}

export default Header;
