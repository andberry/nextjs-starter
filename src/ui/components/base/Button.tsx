import classNames from 'classnames';
import { Link } from '@ui/components/helpers/Link';
import { Loader } from 'lucide-react';
import React, { ComponentPropsWithRef } from 'react';

export type IButtonVariant = 'primary' | 'secondary' | 'outline';
export interface IButton {
  /**
   * Button's label
   */
  label: string;

  /**
   * If provided this component will be rendered as an `<a>`, otherwise it will be render as a `<button>`.
   */
  href?: string;

  /**
   * Additional classes to be applied
   */
  className?: string;

  /**
   * Standard attribute of an `<a>`
   */
  target?: string;

  /**
   * The variant affects the visual style of the button
   */
  variant?: IButtonVariant;

  /**
   * Optional click handler
   */
  onClick?: () => void;

  type?: 'submit' | 'reset' | 'button';
  isLoading?: boolean;
  ariaLabel?: string;

  useStandardAnchorTag?: boolean; // to be used when linking to booking enging link

  disabled?: boolean;

  tabIndex?: number;
}

/**
 * A Button, with variants, that can render itself as an `<a>` or a `<button>`:
 *
 * rendered as an `<a>` if `href` is provided, as a `<button>` otherwise.
 *
 */
export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ComponentPropsWithRef<'button'> & IButton
>(
  (
    {
      label,
      href,
      className,
      target,
      variant = 'primary',
      onClick,
      type,
      isLoading = false,
      ariaLabel,
      useStandardAnchorTag = false,
      disabled,
      tabIndex,
    }: IButton,
    forwardedRef
  ) => {
    const buttonClasses = classNames(
      'inline-flex relative group items-center justify-center',
      'px-7 py-5',
      'uppercase leading-none font-sans text-base font-semibold',
      'transition-all duration-100 ease-linear',
      {
        'border border-primary text-white bg-primary hover:bg-black hover:border-black':
          variant === 'primary',
      },
      {
        'border border-secondary text-black bg-secondary hover:bg-black hover:text-white hover:border-black':
          variant === 'secondary',
      },
      {
        'border border-black bg-white hover:bg-black hover:text-white':
          variant === 'outline',
      },

      className
    );

    return (
      <>
        {href ? (
          useStandardAnchorTag ? (
            <a
              href={href}
              target={target}
              className={`${buttonClasses}`}
              aria-label={ariaLabel}
              ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
            >
              {label}
            </a>
          ) : (
            <Link
              href={href}
              target={target}
              className={`${buttonClasses}`}
              onClick={onClick}
              aria-label={ariaLabel}
              ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
            >
              <span className="relative">{label}</span>
            </Link>
          )
        ) : (
          <button
            className={classNames(`${buttonClasses}`, {
              'pointer-events-none opacity-30': isLoading || disabled,
            })}
            disabled={isLoading || disabled}
            onClick={onClick}
            type={type}
            aria-label={ariaLabel}
            ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
            tabIndex={tabIndex}
          >
            <span className="relative flex justify-center gap-4">
              {label}{' '}
              {isLoading && (
                <Loader
                  className={'animate-spin'}
                  size={'1em'}
                />
              )}
            </span>
          </button>
        )}
      </>
    );
  }
);
