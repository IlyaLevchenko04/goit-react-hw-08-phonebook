import { StyledForm, StyledInput } from 'components/styledComponents';
import { useDispatch } from 'react-redux';
import { register } from 'redux/authSlice/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>Registration form</h2>
      <label htmlFor="name">Name</label>
      <StyledInput type="name" name="name" />
      <label htmlFor="email">Email</label>
      <StyledInput type="email" name="email" />
      <label htmlFor="password">Password</label>
      <StyledInput type="password" name="password" />
      <button type="submit">Register</button>
    </StyledForm>
  );
};
