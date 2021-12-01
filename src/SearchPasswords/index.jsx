const SearchPasswords = ({passwordDetails, setSearchedList}) => {
  const searchPasswords = event => {
    const searchVal = event.target.value
    if (searchVal) {
      const searchedPasswords = passwordDetails.filter(eachPassword =>
        eachPassword.username.toLowerCase().includes(searchVal.toLowerCase()),
      )
      console.log('search', searchedPasswords)

      setSearchedList(searchedPasswords)
    } else {
      setSearchedList(passwordDetails)
    }
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
