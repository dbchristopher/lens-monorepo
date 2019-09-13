import React, { FunctionComponent, Ref } from 'react';
import styled, { css, StyledComponent } from 'styled-components';
import { BoxBasePropsWithout, BoxFlexItemProps } from '../Box/Box';
import Box from '../Box';

export interface FlexItemProps
  extends BoxBasePropsWithout<HTMLDivElement, 'display'>,
    BoxFlexItemProps {
  hidden?: boolean;
}
type ComponentType = FunctionComponent<FlexItemProps>;
type StyledComponentType = StyledComponent<ComponentType, FlexItemProps>;

const InternalFlexItem: ComponentType = props => {
  return <Box {...props}>{props.children}</Box>;
};

const FlexItemFactory = React.forwardRef<StyledComponentType, FlexItemProps>(
  (props: FlexItemProps, ref: Ref<StyledComponentType>) => (
    <InternalFlexItem ref={ref} {...props} />
  )
);

const FlexItem = styled<ComponentType>(FlexItemFactory)`
  ${props => hidden(props.hidden)};
`;

const hidden = (hide?: boolean) =>
  hide
    ? css`
        display: none;
      `
    : false;

export default FlexItem;
