const UserRouter = require('../users/users.routes');
const AuthRouter = require('../auth/auth.routes');

module.exports = (app) => {
  app.use('/api', AuthRouter);
  app.use('/v1/users', UserRouter);
};