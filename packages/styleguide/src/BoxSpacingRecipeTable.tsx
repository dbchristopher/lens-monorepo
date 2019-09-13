import React from 'react';
import { Box, List, ListItem } from 'looker-lens-components';

const spacingTypes = [
  { value: 'm', label: 'Margin' },
  { value: 'p', label: 'Padding' },
];

const spacingSides = [
  { value: ' ', label: 'All', defaultLabel: '(default)' },
  { value: 't', label: 'Top' },
  { value: 'r', label: 'Right' },
  { value: 'b', label: 'Bottom' },
  { value: 'l', label: 'Left' },
  { value: 'x', label: 'Left & Right' },
  { value: 'y', label: 'Top & Bottom' },
];

const spacingSizes = [
  { value: 'xxsmall', label: '4px' },
  { value: 'xsmall', label: '8px' },
  { value: 'small', label: '12px' },
  { value: 'medium', label: '16px' },
  { value: 'large', label: '20px' },
  { value: 'xlarge', label: '32px' },
  { value: 'xxlarge', label: '40px' },
  { value: 'xxxlarge', label: '60px' },
];

export interface ColumnExample {
  value: string;
  label: string;
  defaultLabel?: string;
}

const SpaceListHeader = (text: string, defaultLabel?: string) => {
  return (
    <Box mb="medium">
      <p>{text}</p>
      <Box is="span" ml="xsmall">
        <p>{defaultLabel}</p>
      </Box>
    </Box>
  );
};

const ListRender = (
  value: string,
  label: string,
  key: number,
  defaultLabel?: string
) => {
  return (
    <ListItem key={key}>
      <Box px="small" is="span" className="prop-code">
        <code>{value}</code>
      </Box>
      <Box ml="small" is="span">
        <p>{label}</p>
        <Box is="span" ml="xsmall">
          <p>{defaultLabel}</p>
        </Box>
      </Box>
    </ListItem>
  );
};

class BoxSpacingRecipeTableRender extends React.Component<
  {},
  {
    types: ColumnExample[];
    sides: ColumnExample[];
    sizes: ColumnExample[];
  }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sides: spacingSides,
      sizes: spacingSizes,
      types: spacingTypes,
    };
  }

  public render() {
    return (
      <div className="spacing-table">
        <Box pr="xxlarge">
          {SpaceListHeader('1. Type')}
          <List>
            {this.state.types.map((col, i) => {
              return ListRender(col.value, col.label, i);
            })}
          </List>
        </Box>
        <Box px="xxlarge">
          {SpaceListHeader('2. Side', '(optional)')}
          <List>
            {this.state.sides.map((col, i) => {
              return ListRender(col.value, col.label, i, col.defaultLabel);
            })}
          </List>
        </Box>
        <Box px="xxlarge">
          {SpaceListHeader('3. Amount')}
          <List>
            {this.state.sizes.map((col, i) => {
              return ListRender(col.value, col.label, i);
            })}
          </List>
        </Box>
      </div>
    );
  }
}

export default BoxSpacingRecipeTableRender;
