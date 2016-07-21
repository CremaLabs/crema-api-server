const encryption = require('../utils/encryption');
const UserCtrl = require('../users/users.controller');

module.exports = {
  addUser,
  login,
  endSession,
  checkAuth
};

/***** PUBLIC *****/

function login(req, res) { 
  res.send({
    id: req.user.id,
    username: req.user.username,
    fullName: req.user.fullName,
    email: req.user.email,
    role: req.user.role,
    createdAt: req.user.createdAt,
    updatedAt: req.user.updatedAt
  });
}

function addUser(req,res) {
  return encryption.hashPassword(req.body.password)
    .then(hashedPassword => {
      req.body.password = hashedPassword;
      return UserCtrl.createUser(req, res);
    })
    .then(newUser => {
      req.login(newUser, err => {
        if (err) {
          console.error(err);
          res.status(500).send({ message: 'Failed to login' });
        } else {
          res.send({
            username: newUser.username,
            fullName: newUser.fullName,
            id: newUser.id
          });
        }
      });
    });
}

function endSession(req, res) {
  req.logout();
  res.sendStatus(200);
}

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.sendStatus(401);
  }
}