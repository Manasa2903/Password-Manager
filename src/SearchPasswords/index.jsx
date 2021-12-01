import {useState} from 'react'

const SearchPasswords = ({setPasswordList, passwordDetails}) => {
  const [searchVal, setSearchVal] = useState('')
  const searchPasswords = event => {
    setSearchVal(event.target.value)
    const searchedPasswords = passwordDetails.filter(eachPassword =>
      eachPassword.username.toLowerCase().includes(searchVal.toLowerCase()),
    )
    console.log('search', searchedPasswords)

    setPasswordList(searchedPasswords)
  }

  return (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
        alt="search"
      />
      <input
        type="search"
        placeholder="Search"
        onChange={event => searchPasswords(event)}
      />
    </>
  )
}

export default SearchPasswords
