import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logout } from 'redux/authSlice/operations';
import {
  selectIsLoggedIn,
  selectToken,
  selectUserEmail,
} from 'redux/authSlice/selectors';

import {
  StyledDiv,
  StyledLink,
  StyledList,
  StyledNav,
} from 'components/styledComponents';

export const SharedLayout = () => {
  const userEmail = useSelector(selectUserEmail);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout(token));
  };
  return (
    <>
      <StyledDiv>
        <StyledNav>
          <StyledList>
            {!isLoggedIn && <StyledLink to="/login">Login</StyledLink>}
            {!isLoggedIn && <StyledLink to="/register">Register</StyledLink>}
            {isLoggedIn && <StyledLink to={`/contacts`}>Phonebook</StyledLink>}
            <StyledLink to="/">Home</StyledLink>
          </StyledList>
        </StyledNav>
        {isLoggedIn && (
          <StyledDiv>
            <p>{userEmail}</p>
            <button type="button" onClick={handleClick}>
              Logout
            </button>
          </StyledDiv>
        )}
      </StyledDiv>
      <Outlet />
    </>
  );
};
