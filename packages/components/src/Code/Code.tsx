import React, { FunctionComponent, Ref } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { theme } from 'looker-lens-design-tokens';
import { TextProps } from '../Text/Text';
import Text from '../Text';

type ComponentType = FunctionComponent<TextProps>;
type StyledComponentType = StyledComponent<ComponentType, TextProps>;

const InternalCode: ComponentType = props => {
  return (
    <Text is="code" fontFamily={theme.fonts.code} {...props}>
      {props.children}
    </Text>
  );
};

const CodeFactory = React.forwardRef<StyledComponentType, TextProps>(
  (props: TextProps, ref: Ref<StyledComponentType>) => (
    <InternalCode ref={ref} {...props} />
  )
);

const Code = styled<ComponentType>(CodeFactory)``;

export default Code;
