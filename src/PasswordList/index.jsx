const PasswordList = ({
  passwordDetails,
  isShowPasswordChecked,
  deletePassword,
}) => {
  const {id, website, username, password} = passwordDetails

  return (
    <li>
      <p>{website[0]}</p>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        {isShowPasswordChecked ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
          />
        )}
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          onClick={() => {
            deletePassword(id)
          }}
        />
      </div>
    </li>
  )
}

export default PasswordList
