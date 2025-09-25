import { PropsWithChildren } from 'react';
import './Page.css';
import Column from '@skeleton/Column';

type Props = PropsWithChildren;

function Page({ children }: Props) {
  return (
    <Column className="page" alignItems="center">
      {children}
    </Column>
  );
}

export default Page;
