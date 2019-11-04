import React from 'react'
import './styles.scss'

export const FormInput = ({ label, onChange, ...arg }) => (
  <div className='group'>
    <input type="text" className='form-input' onChange={onChange} {...arg} />
    {
      label ? (
        <label className={`${arg.value && arg.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ):(
        null
      )
    }
  </div>
)