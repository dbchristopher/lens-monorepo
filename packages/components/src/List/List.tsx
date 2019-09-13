import React, { FunctionComponent, Ref } from 'react';
import styled, { css, StyledComponent, ThemeProvider } from 'styled-components';
import { theme } from 'looker-lens-design-tokens';
import { BoxProps } from '../Box/Box';
import Box from '../Box';

export type ListTypes = 'bullet' | 'number' | 'letter';

export interface ListProps
  extends BoxProps<HTMLOListElement | HTMLUListElement> {
  type?: ListTypes;
  nomarker?: boolean;
}

type ComponentType = FunctionComponent<ListProps>;
type StyledComponentType = StyledComponent<ComponentType, ListProps>;

/**
 * List are stacked groups of related content that can be useful in many contexts.
 */
const InternalList: ComponentType = ({ type, nomarker, ...props }) => {
  const pl = nomarker ? 'none' : 'medium';
  const listType = type === 'number' || type === 'letter' ? 'ol' : 'ul';

  return (
    <ThemeProvider theme={theme}>
      <Box is={listType} m="none" pl={pl} {...props}>
        {props.children}
      </Box>
    </ThemeProvider>
  );
};

function listStyleType(props: ListProps) {
  switch (props.nomarker ? undefined : props.type) {
    case 'bullet':
      return css`
        list-style-type: disc;
      `;
    case 'number':
      return css`
        list-style-type: decimal;
      `;
    case 'letter':
      return css`
        list-style-type: upper-alpha;
      `;
    default:
      return css`
        list-style-type: none;
      `;
  }
}

const ListFactory = React.forwardRef<StyledComponentType, ListProps>(
  (props: ListProps, ref: Ref<StyledComponentType>) => (
    <InternalList ref={ref} {...props} />
  )
);

const List = styled<ComponentType>(ListFactory)`
  ${listStyleType};
`;

export default List;
