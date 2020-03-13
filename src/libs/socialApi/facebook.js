const getFacebookUserProfile = access_token => {
  const graphFbURI = 'https://graph.facebook.com/v6.0/me'
  const profileFields = 'fields=id,name,email'
  const linkToGetInfo = `${graphFbURI}/${profileFields}&access_token=${access_token}`
  /*eslint no-undef: "off"*/
  return fetch(linkToGetInfo)
    .then(userInfo => {
      return Promise.resolve(userInfo.json())
    })
    .catch(err => {
      return Promise.reject({
        message: err.message,
      })
    })
}

export default getFacebookUserProfile
