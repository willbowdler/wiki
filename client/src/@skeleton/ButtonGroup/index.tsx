import Row from '@skeleton/Row';
import { PropsWithChildren } from 'react';

type Props = {
  gap: number;
} & PropsWithChildren;

function ButtonGroup({ gap, children }: Props) {
  return <Row gap={gap}>{children}</Row>;
}

export default ButtonGroup;
