const authCheck = (req, res) => {
  if (!req.user) {
    // if user is not logged in
    res.redirect('/auth/login');
  } else {
    // if user logged in
    next();
  }
}

module.exports = authCheck;