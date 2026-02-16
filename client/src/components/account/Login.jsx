import React, { useContext } from 'react'
import mystyles from './styles/mystyles.module.css'
import { AuthContext } from './Authcontext'
import StatusComponent from './Status/StatusComponent'
import { useStatus } from './Status/StatusContext'

const Login = () => {
  const [formValue, setformValue] = React.useState({
    username: '',
    password: ''
  })
  const { login } = useContext(AuthContext)
  const { updateStatus } = useStatus()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await login(formValue.username, formValue.password)
      updateStatus(response.status, `${response.status} Login success`)
    } catch (error) {
      const code = error?.response?.status || 500
      const message = error?.response?.data?.message || 'Login failed'
      updateStatus(code, `${code} ${message}`)
    }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className={mystyles.accountsection}>
      <StatusComponent />
      <div className={mystyles.fulldivcontent}>
        <form className={mystyles.signinform} onSubmit={handleSubmit}>
          <label className={mystyles.labels}>
            Username
          </label>

          <input type='text' className={mystyles.inputs} name='username' onChange={handleChange} />

          <label className={mystyles.labels}>
            Password
          </label>

          <input type='password' className={mystyles.inputs} name='password' onChange={handleChange} />

          <button className={mystyles.coonectbutton}>log in.</button>

          <p> Terms of Service</p>
        </form>
      </div>
    </div>
  )
}

export default Login
