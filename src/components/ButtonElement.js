import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${props => props.primary ? '#01BF71' : '#010606'};
  white-space: nowrap;
  padding: ${props => props.big ? '14px 48px' : '12px 30px'};
  color: ${props => props.dark ? '#010606' : '#fff'};
  font-size: ${props => props.fontBig ? '20px' : '16px'};
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all .2s ease-in-out;
    background: ${props => props.primary ? '#fff' : '#01BF71'};
  }
`;