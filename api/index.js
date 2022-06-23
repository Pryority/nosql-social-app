const router = require('express').Router();
const userRoutes = require('./pizza-routes');

router.use('/users', userRoutes);

module.exports = router;
