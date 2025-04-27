import 'Column.css';
import { PropsWithChildren } from 'react';

type Props = {
  gap: number;
} & PropsWithChildren;

function Column({ gap, children }: Props) {
  return <div className={`column gap-${gap}`}>{children}</div>;
}

export default Column;
