import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Link } from '@components/helpers/Link';

interface IAnchor {
  href: string;
  className?: string;
  target?: '_self' | '_blank';
  ariaLabel?: string;
}
export const Anchor = ({
  href,
  children,
  className,
  target,
  ariaLabel,
}: PropsWithChildren<IAnchor>) => (
  <Link
    href={href}
    target={target}
    className={classNames(
      'group relative transition-all duration-100 ease-linear',
      'text-black hover:underline',
      className
    )}
    aria-label={ariaLabel}
  >
    {children}
  </Link>
);
