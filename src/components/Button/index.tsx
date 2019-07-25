import React, { ReactNode, MouseEvent } from 'react';

import './styles.sass';

interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  children?: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

export const Button = ({ onClick, className, children, disabled, type }: IButtonProps) => {
  return <button disabled={disabled}
                 type={type}
                 onClick={onClick}
                 className={className}>
    {children}
  </button>;
};
export default Button;
