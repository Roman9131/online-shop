import React, { ReactNode } from 'react';

import './styles.sass';

interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({ onClick, className, children, type }: IButtonProps) => {
  return  <button type={type} onClick={onClick} className={className}>{children}</button>;
};
export default Button;
