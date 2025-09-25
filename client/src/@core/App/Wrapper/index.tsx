import { PropsWithChildren } from 'react';

import './Wrapper.css';
import Navigation from './Navigation';

type Props = {} & PropsWithChildren;

function Wrapper({ children }: Props) {
  return (
    <div className="wrapper">
      <Navigation />
      {children}
    </div>
  );
}

export default Wrapper;
