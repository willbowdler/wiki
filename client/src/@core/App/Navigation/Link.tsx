import { PropsWithChildren } from 'react';
import { NavLink } from 'react-router';

type Props = {
  href: string;
  target?: '_blank';
} & PropsWithChildren;

function Link({ href, target, children }: Props) {
  return (
    <NavLink className="link" to={href} target={target}>
      {children}
    </NavLink>
  );
}

export default Link;
