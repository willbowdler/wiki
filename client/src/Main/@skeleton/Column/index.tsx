import { AllHTMLAttributes, JSX, PropsWithChildren } from 'react';

import './Column.css';

type Props = {
  as?: keyof JSX.IntrinsicElements;
  gap?: number;
  justifyContent?: 'start' | 'center' | 'end';
  alignItems?: 'start' | 'center' | 'end';
} & PropsWithChildren &
  AllHTMLAttributes<HTMLElement>;

function Column({
  as: Component = 'div',
  gap = 1,
  justifyContent = 'start',
  alignItems = 'start',
  children,
}: Props) {
  return (
    <Component
      className={`column gap-${gap}`}
      style={{ justifyContent: justifyContent, alignItems: alignItems }}
    >
      {children}
    </Component>
  );
}

export default Column;
