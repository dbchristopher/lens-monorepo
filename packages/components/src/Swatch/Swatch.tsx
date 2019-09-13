import * as React from 'react';
import { BoxProps } from '../Box/Box';
import Box from '../Box';

export interface SwatchProps extends BoxProps<HTMLDivElement> {
  /**
   * The background color to display on the swatch.
   */
  color?: string;
  /**
   * Swatch height.
   */
  height?: string;
  /**
   * Swatch width.
   */
  width?: string;
}

const InternalSwatch: React.FC<SwatchProps> = ({
  color,
  width,
  height,
  ...props
}) => {
  return (
    <Box
      border="1px solid"
      borderColor="palette.charcoal300"
      borderRadius="medium"
      bg={color || 'white'}
      width={width || '28px'}
      height={height || '28px'}
      {...props}
    />
  );
};

const Swatch = React.forwardRef<HTMLElement, SwatchProps>(
  (props: SwatchProps, ref) => {
    return <InternalSwatch {...props} innerRef={ref} />;
  }
);

export default Swatch;
