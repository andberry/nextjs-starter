import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Link } from '@components/helpers/Link';

interface IAnchor {
  href: string;
  className?: string;
  variant?: 'dark' | 'light' | 'simple';
  target?: '_self' | '_blank';
  ariaLabel?: string;
}
export const Anchor = ({
  href,
  children,
  className,
  variant = 'dark',
  target,
  ariaLabel,
}: PropsWithChildren<IAnchor>) => (
  <Link
    href={href}
    target={target}
    className={classNames(
      'group relative underline transition-all duration-100 ease-linear',
      { 'hover:text-primary text-black': variant === 'dark' },
      { 'text-secondary hover:text-primary': variant === 'light' },
      className
    )}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);
