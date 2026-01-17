import React from 'react'
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'primary-white';
  type?: 'button' | 'submit';
  className?: string;
}

const Button = ({ 
  href,
  children, 
  onClick, 
  variant = 'primary', 
  type = 'button',
  className = '' 
}: ButtonProps) => {
  const combinedClasses = `btn ${styles.btn} ${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  )
}

export default Button
