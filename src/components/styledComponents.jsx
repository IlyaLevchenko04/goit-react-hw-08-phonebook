import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
  text-decoration: none;
`;

export const StyledNav = styled('nav')`
  display: flex;
  gap: 10px;
  margin-right: auto;
`;
export const StyledList = styled('ul')`
  display: flex;
  gap: 10px;
`;

export const StyledDiv = styled('div')`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StyledForm = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledInput = styled('input')`
  width: 300px;
`;

export const StyledHomePage = styled('div')`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #010101;
`;
