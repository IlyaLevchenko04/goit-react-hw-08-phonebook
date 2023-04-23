import { StyledForm, StyledInput } from 'components/styledComponents';
import { useDispatch } from 'react-redux';
import { login } from 'redux/authSlice/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Login form</h2>
      <label htmlFor="email">Email</label>
      <StyledInput type="email" name="email" />
      <label htmlFor="password">Password</label>
      <StyledInput type="password" name="password" />
      <button type="submit">Login</button>
    </StyledForm>
  );
};
