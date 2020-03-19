import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'
import Link, { LinkProps } from 'next/link'

export type ButtonLinkProps = Omit<ButtonProps, 'href' | 'classes'> &
  Pick<LinkProps, 'href' | 'as' | 'prefetch'>

const ButtonLink = React.forwardRef<ButtonLinkProps, any>(
  ({ href, as, prefetch, ...props }, ref) => (
    <Link href={href} as={as} prefetch={prefetch} passHref>
      <Button ref={ref} disableRipple style={{ background: 'transparent', textTransform: 'none' }} {...props} />
    </Link>
  )
);

export default ButtonLink;
