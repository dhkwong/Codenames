const express = require('express');
const router = express.Router();
const catchallRoute = require('./catchall.routes');
const apiRouter = express.Router();
const historyRoutes = require('./history.routes');
apiRouter.use('/historys', historyRoutes);
router.use('/api', apiRouter)
  .use(catchallRoute);
module.exports = router;
