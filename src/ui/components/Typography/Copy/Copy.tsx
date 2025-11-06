import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface ICopyProps {
  size?: 'small' | 'medium' | 'large' | 'inherit';
  className?: string;
  as?: 'div' | 'p' | 'strong' | 'em';
}

export const Copy = ({
  children,
  size = 'medium',
  className,
  as = 'div',
}: PropsWithChildren<ICopyProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'font-playfair text-pretty text-black',
        {
          'my-8 text-3xl': size === 'large',
          'my-6 text-2xl': size === 'medium',
          'my-4 text-sm': size === 'small',
        },
        className
      )}
    >
      {children}
    </Tag>
  );
};
