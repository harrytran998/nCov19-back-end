const pagination = (req, res, next) => {
  req.pagination = (limit = 20) => {
    let page = parseInt(req.query.page || req.body.page) || 0
    let size = parseInt(req.query.size || req.body.size) || 0
    if (size <= 0 || size > 100) {
      size = limit
    }
    if (page < 0) page = 0
    return {
      offset: size * page,
      limit: size,
      currentPage: page,
      nextPage: page + 1,
    }
  }
  return next()
}

export default pagination
