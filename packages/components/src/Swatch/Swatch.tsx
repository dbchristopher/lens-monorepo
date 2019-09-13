import styled from 'styled-components';

const Swatch = styled.div`
  width: 40px;
  height: 40px;
  background: ${props => props.color};
  border: 1px solid #000;
  border-radius: 3px;
  display: inline-block;
  margin: 5px;
`;

export default Swatch;
