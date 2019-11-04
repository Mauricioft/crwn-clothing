import React from 'react'
import './styles.scss'

export const CustomButton = ({ children, isGoogleSignIn, ...arg }) => <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...arg}>{children}</button>