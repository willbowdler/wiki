import { PropsWithChildren } from 'react';

type Props = {} & PropsWithChildren;

function Wrapper({ children }: Props) {
  return <div>{children}</div>;
}

export default Wrapper;
