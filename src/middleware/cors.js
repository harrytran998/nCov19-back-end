export const setCorsHeader = (req, res, next) => {
  // CORS headers
  res.header('Access-Control-Allow-Origin', '*') // restrict it to the required domain
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS')
  // Set custom headers for CORS
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-type,Accept,X-Access-Token,X-Key')
  if (req.method === 'OPTIONS') {
    res.status(200).send('OKIE !')
  } else {
    next()
  }
}
