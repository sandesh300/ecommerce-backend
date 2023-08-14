const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 // token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDhkY2MxMDcyYjgzZGM2YzUwZTA1YiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxOTM0MDYzfQ.5ip_VXKtFJaswRwMObaQZvRL_DSxA_sUzMARl8F0s9M"
  return token;
};