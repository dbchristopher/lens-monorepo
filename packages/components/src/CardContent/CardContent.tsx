import React, { FunctionComponent, Ref } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { BoxProps } from '../Box/Box';
import Box from '../Box';

export type CardContentProps = BoxProps<HTMLDivElement>;
type ComponentType = FunctionComponent<CardContentProps>;
type StyledComponentType = StyledComponent<ComponentType, CardContentProps>;

const InternalCardContent: ComponentType = props => (
  <Box p="medium" {...props}>
    {props.children}
  </Box>
);

const CardContentFactory = React.forwardRef<
  StyledComponentType,
  CardContentProps
>((props: CardContentProps, ref: Ref<StyledComponentType>) => (
  <InternalCardContent ref={ref} {...props} />
));

const CardContent = styled<ComponentType>(CardContentFactory)``;

export default CardContent;
