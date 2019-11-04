import { useState } from 'react'

const useForm = (callback) => {
  const [values, setValues] = useState({})
  const onSubmit = (event) => {
    if (event) event.preventDefault()
      callback()
  }
  const onChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }
  return {
    onChange,
    onSubmit,
    values,
  }
}

export default useForm