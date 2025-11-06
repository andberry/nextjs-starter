import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface IProps {
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div';
}

const headingsCommonClasses = 'text-balance font-sans font-bold mb-4';

export const H1 = ({
  children,
  className,
  as = 'h1',
}: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-4xl xl:text-6xl',
        headingsCommonClasses,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const H2 = ({
  children,
  className,
  as = 'h2',
}: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-3xl xl:text-5xl',
        headingsCommonClasses,
        className
      )}
    >
      {children}
    </Tag>
  );
};

export const H3 = ({
  children,
  className,
  as = 'h3',
}: PropsWithChildren<IProps>) => {
  const Tag = as;

  return (
    <Tag
      className={classNames(
        'text-2xl xl:text-4xl',
        headingsCommonClasses,
        className
      )}
    >
      {children}
    </Tag>
  );
};
