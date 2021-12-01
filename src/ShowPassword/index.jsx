import {useState} from 'react'
import PasswordInput from '../PasswordList'

const ShowPassword = ({setShowPassword}) => {
  //   const [showPassword, setShowPassword] = useState(false)

  const isChecked = event => {
    setShowPassword(event.target.checked)
    // console.log(event)
  }

  return (
    <>
      <input
        type="checkbox"
        id="showPassword"
        onChange={event => {
          isChecked(event)
        }}
      />
      <label htmlFor="showPassword">Show Passwords</label>
      {/* <PasswordInput isShowPasswordChecked={showPassword} /> */}
    </>
  )
}

export default ShowPassword
