import { useEffect } from 'react';
import { SharedLayout } from './Phonebook/SharedLoyaut';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/ContactsSlice/operations';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './auth/registerForm';
import { LoginForm } from './auth/loginForm';
import { refreshUser } from 'redux/authSlice/operations';
import { RestrictedRoute } from './Phonebook/RestrictedRoute';
import { Homepage } from './Phonebook/Homepage';
import { Phonebook } from './Phonebook/Phonebook';
import { PrivateRoute } from './Phonebook/PrivateRoute';
import { selectIsRefreshing, selectToken } from 'redux/authSlice/selectors';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(refreshUser());
      dispatch(fetchContacts());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    'Fetching...'
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="contacts"
          element={<PrivateRoute component={Phonebook} redirectTo="/" />}
        />

        <Route
          path="login"
          element={
            <RestrictedRoute component={LoginForm} redirectTo="/contacts" />
          }
        />

        <Route
          path="register"
          element={
            <RestrictedRoute component={RegisterForm} redirectTo="/contacts" />
          }
        />
      </Route>
    </Routes>
  );
}
