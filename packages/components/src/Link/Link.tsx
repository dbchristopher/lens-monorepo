import React, { FunctionComponent, Ref } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { BoxProps } from '../Box/Box';
import Box from '../Box';

export interface LinkProps extends BoxProps<HTMLAnchorElement> {}

type ComponentType = FunctionComponent<LinkProps>;
type StyledComponentType = StyledComponent<ComponentType, LinkProps>;

const InternalLink: ComponentType = ({ ...props }) => {
  return (
    <Box
      is="a"
      color="semanticColors.primary.linkColor"
      style={{ textDecoration: 'none' }}
      hoverStyle={{ textDecoration: 'underline ' }}
      {...props}
    />
  );
};

const LinkFactory = React.forwardRef<StyledComponentType, LinkProps>(
  (props: LinkProps, ref: Ref<StyledComponentType>) => (
    <InternalLink innerRef={ref} {...props} />
  )
);

const Link = styled<ComponentType>(LinkFactory)``;

export default Link;
