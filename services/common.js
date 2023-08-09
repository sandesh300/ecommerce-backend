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
    token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDNkM2M4MWU4YWIxMmVhN2ZkZDhmZCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkxNjA0MTIwfQ.xvKljgS_S6jJ4zY1fTW7sraEeeg0dxwI6YMDvP23VMs'
  return token;
};