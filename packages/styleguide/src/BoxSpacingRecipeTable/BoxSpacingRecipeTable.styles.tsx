import styled from 'styled-components';
import { theme } from 'looker-lens-design-tokens';

export const SpacingTable = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  & > div {
    border-right: 1px solid ${theme.colors.palette.charcoal200};
    &:last-child {
      border-right: none;
    }
  }
`;
