import { PropsWithChildren } from 'react';
import Column from '@skeleton/Column';

import './Page.css';

type Props = PropsWithChildren;

function Page({ children }: Props) {
  return (
    <Column className="page" alignItems="center">
      {children}
    </Column>
  );
}

export default Page;
