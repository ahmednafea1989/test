const router = require('express').Router();

const authRoutes = require('./authRoutes');
const getQuestionsRoutes = require('./getQuestionsRoutes');
const addQuestionRoutes = require('./addQuestionRoutes');
const addScore = require('./addScore');

router.use('/quiz', getQuestionsRoutes);
router.use('/auth', authRoutes);
router.use('/post', addQuestionRoutes);
router.use('/score', addScore);


module.exports = router;
