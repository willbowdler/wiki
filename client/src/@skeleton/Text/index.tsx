import { AllHTMLAttributes, JSX, PropsWithChildren } from 'react';
import './Text.css';

type Props = {
  fontFamily?: 'primary' | 'secondary';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  weight?:
    | 'thin'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semi-bold'
    | 'bold'
    | 'black';
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
  height?: 'sm' | 'md' | 'lg' | 'xl';
} & PropsWithChildren &
  AllHTMLAttributes<HTMLElement>;

export const Text = ({
  fontFamily = 'primary',
  variant = 'primary',
  as: Component = 'span',
  weight = 'regular',
  textSize = 'md',
  height = 'md',
  children,
}: Props) => {
  return (
    <Component
      className={`text-line-height-${height} text-weight-${weight} text-variant-${variant} text-size-${textSize} text-font-family-${fontFamily}`}
    >
      {children}
    </Component>
  );
};
