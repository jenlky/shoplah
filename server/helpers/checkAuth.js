/*
const authCheck = (req, res) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
} */

//module.exports = authCheck;

const checkAuth = (req, res, next) => {
  //if user is logged in, req.isAuthenticated() will return true
  if(req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized'})
    // res.redirect("http://localhost:3000/");
  }
};

module.exports = checkAuth;