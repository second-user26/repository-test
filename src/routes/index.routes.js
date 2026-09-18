const express = require('express');


const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes');
const teacherRoutes = require('./teacher.routes');

const router = express.Router();

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/teacher', teacherRoutes);


module.exports = router;