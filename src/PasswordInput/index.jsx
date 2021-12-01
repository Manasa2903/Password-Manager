import {useState} from 'react'
import PasswordList from '../PasswordList/index'
import ShowPassword from '../ShowPassword/index'
import SearchPasswords from '../SearchPasswords/index'

const PasswordInput = () => {
  const [passwordList, setPasswordList] = useState([])
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [id, setId] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [searchedList, setSearchedList] = useState(passwordList)

  const addPasswords = event => {
    event.preventDefault()
    const newPassword = {
      id,
      website,
      username,
      password,
    }

    setPasswordList([...passwordList, newPassword])
    setSearchedList([...passwordList, newPassword])
    setId(id + 1)
  }

  const onDeletePassword = deleteId => {
    const filteredPasswords = passwordList.filter(
      eachPassword => eachPassword.id !== deleteId,
    )

    setPasswordList(filteredPasswords)
    setSearchedList(filteredPasswords)
  }

  return (
    <div>
      <div>
        <h1>Add New Password</h1>
        <form onSubmit={addPasswords}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              type="text"
              onChange={event => {
                setWebsite(event.target.value)
              }}
              placeholder="Enter Website"
              required
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              onChange={event => {
                setUsername(event.target.value)
              }}
              placeholder="Enter Username"
              required
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={event => {
                setPassword(event.target.value)
              }}
              required
            />
          </div>
          <button type="submit" testid="delete">
            Add
          </button>
        </form>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
        />
      </div>
      <div>
        <h1>Your Passwords</h1>
        <p>{passwordList.length} </p>
      </div>
      <div>
        <SearchPasswords
          passwordDetails={passwordList}
          setSearchedList={setSearchedList}
        />
      </div>
      <div>
        <ShowPassword setShowPassword={setShowPassword} />
      </div>

      <ul>
        {searchedList.length > 0 ? (
          searchedList.map(eachPassword => (
            <PasswordList
              key={eachPassword.id}
              passwordDetails={eachPassword}
              deletePassword={onDeletePassword}
              isShowPasswordChecked={showPassword}
            />
          ))
        ) : (
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
            />
            <p>No Passwords</p>
          </div>
        )}
      </ul>
    </div>
  )
}
export default PasswordInput
