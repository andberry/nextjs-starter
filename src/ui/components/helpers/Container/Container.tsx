import { PropsWithChildren } from 'react';

interface IProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'fluid';
  className?: string;
}
export const Container = ({
  children,
  size = '2xl',
  className = '',
}: PropsWithChildren<IProps>) => {
  const sizeClassMap = {
    sm: 'max-w-screen-sm px-8 ',
    md: 'max-w-screen-md px-8 md:px-12',
    lg: 'max-w-screen-lg px-8 md:px-12 lg:px-14 3xl:px-16',
    xl: 'max-w-screen-xl px-8 md:px-12 lg:px-14 3xl:px-16',
    '2xl': 'max-w-screen-2xl px-8 md:px-12 lg:px-14 3xl:px-16',
    '3xl': 'max-w-screen-3xl px-8 md:px-12 lg:px-14 2xl:px-16',
    fluid: 'max-w-none px-8 md:px-12 lg:px-14 3xl:px-16',
  };
  return (
    <div className={`mx-auto ${sizeClassMap[size]} ${className}`}>
      {children}
    </div>
  );
};
