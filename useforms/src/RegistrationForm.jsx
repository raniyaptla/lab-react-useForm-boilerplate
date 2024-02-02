import React from 'react';
import { useForm } from 'react-hook-form';
import './app.css';

const RegistrationForm = () => {
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  const onSubmit = (data) => {
    console.log(data); 

    // Validation
    const newMessages = {};

    if (!data.firstName) {
      newMessages.firstName = 'Please enter your first name!';
      setError('firstName', { message: 'Please enter your first name!' });
    }

    if (!data.lastName) {
      newMessages.lastName = 'Please enter your last name!';
      setError('lastName', { message: 'Please enter your last name!' });
    }

    if (!data.email) {
      newMessages.email = 'Please enter your email!';
      setError('email', { message: 'Please enter your email!' });
    }

    // Password validation
    if (data.password.length < 5) {
      newMessages.password = 'Password must be more than 4 characters.';
      setError('password', { message: 'Password must be more than 4 characters.' });
    } else if (data.password.length > 20) {
      newMessages.password = 'Password cannot be more than 20 characters.';
      setError('password', { message: 'Password cannot be more than 20 characters.' });
    }

    // success message
    if (Object.keys(newMessages).length === 0) {
      setRegistrationSuccess(true);
    }
  };

  return (
    <div>
      <div>{registrationSuccess && <h2>Registration successful!</h2>}</div>
      <div className="registration-form">
        <form onSubmit={handleSubmit(onSubmit)}>
        
          <label>
            First Name:
            <input type="text" name="firstName" {...register('firstName')} />
          </label>
          <p className="message">{errors?.firstName?.message}</p>

          <label>
            Last Name:
            <input type="text" name="lastName" {...register('lastName')} />
          </label>
          <p className="message">{errors?.lastName?.message}</p>

          <label>
            Email:
            <input type="email" name="email" {...register('email')} />
          </label>
          <p className="message">{errors?.email?.message}</p>

          
          <label>
            Password:
            <input type="password" name="password" {...register('password')} />
          </label>
          <p className="message">{errors?.password?.message}</p>

        
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
