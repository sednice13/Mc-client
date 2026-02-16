import React, { useContext } from 'react'
import mystyles from './styles/mystyles.module.css'
import { AuthContext } from './Authcontext'
import StatusComponent from './Status/StatusComponent'
import { useStatus } from './Status/StatusContext'

const Register = () => {
  const [formValue, setformValue] = React.useState({
    username: '',
    password: '',
    mail: ''
  })
  const { register } = useContext(AuthContext)
  const { updateStatus } = useStatus()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await register(formValue.username, formValue.password, formValue.mail)
      const message = response?.data?.message || 'Register success'
      updateStatus(response.status, `${response.status} ${message}`)
    } catch (error) {
      const code = error?.response?.status || 500
      const message = error?.response?.data?.message || 'Register failed'
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

          <input type='text' className={mystyles.inputs} value={formValue.username} name='username' onChange={handleChange} />

          <label className={mystyles.labels}>
            Mail Adress
          </label>

          <input type='text' className={mystyles.inputs} value={formValue.mail} name='mail' onChange={handleChange} />

          <label className={mystyles.labels}>
            Password
          </label>

          <input type='password' className={mystyles.inputs} value={formValue.password} name='password' onChange={handleChange} />

          <button className={mystyles.coonectbutton}>Sign</button>

          <p> Terms of Service</p>
        </form>
      </div>
    </div>
  )
}

export default Register
