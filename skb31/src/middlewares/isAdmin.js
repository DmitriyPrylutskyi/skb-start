/**
 * Created by Dmitriy Prilutsky on 19.11.2016.
 */

export default (req, res, next) => {
  if (req.headers.user === 'admin') {
    return next();
  }
  return next('access error');
}
