module.exports = function viewsData(req, res, next) {
  const sharedData = {
    _url: req.url,
    _years: Math.round((new Date()).getTime()/1000/3600/24/365)
  };
  res.locals = { ...res.locals, ...sharedData };
  next();
};
