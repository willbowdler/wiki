import { AllHTMLAttributes, JSX, PropsWithChildren } from 'react';

import './Column.css';

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

function Column({
  as: Component = 'div',
  gap = 1,
  justifyContent = 'start',
  alignItems = 'start',
  children,
  className = '',
}: Props) {
  return (
    <Component
      className={`column gap-${gap} ${className}`}
      style={{ justifyContent: justifyContent, alignItems: alignItems }}
    >
      {children}
    </Component>
  );
}

export default Column;
