// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link';
import { ComponentProps, forwardRef } from 'react';
// import { useRouter } from 'next/router';
// import { stripLocaleFromRelativeUrl } from '@dc/shared/util';

/**
 * This is a custom wrapper for the next/link component. We might need to be able to do
 * some processing to every link in the project, and this is the easiest way to do so.
 *
 * An eslint rule prevents developers from trying to import
 * the next/link component forcing them to use this component instead:
 * next/link should never be used directly, but always through this component.
 *
 */
export const Link = forwardRef<
  HTMLAnchorElement,
  ComponentProps<typeof NextLink>
>((props, ref) => {
  const { href } = props;

  return (
    <NextLink
      ref={ref}
      {...props}
      href={href}
    />
  );
});
