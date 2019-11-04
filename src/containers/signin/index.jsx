import React from 'react'
import { FormInput } from '../../components/form-input/'
import { CustomButton } from '../../components/custom-button/'
import UseForm from '../../containers/use-form/'
import { signInWithGoogle } from '../../firebase/'
import './styles.scss'

const SignIn = () => {
  const handlerSubmit = () => {
    console.log(values)
  }
  const { values, onChange, onSubmit } = UseForm(handlerSubmit)
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmit}>
        <FormInput 
          label='Email'
          type='email'
          name='email'
          onChange={onChange}
          value={values.email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          onChange={onChange}
          value={values.password}
          required 
        />
        <div className='buttons'>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn