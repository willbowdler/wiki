import { AllHTMLAttributes, JSX, PropsWithChildren } from 'react';

import './Row.css';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  gap?: number;
  justifyContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'start' | 'center' | 'end';
} & PropsWithChildren &
  AllHTMLAttributes<HTMLElement>;

function Row({
  as: Component = 'div',
  gap = 1,
  justifyContent = 'start',
  alignItems = 'start',
  children,
  className = '',
}: Props) {
  return (
    <Component
      className={`row gap-${gap} ${className}`}
      style={{ justifyContent: justifyContent, alignItems: alignItems }}
    >
      {children}
    </Component>
  );
}

export default Row;
