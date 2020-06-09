const { User, Questions,Score } = require('../models/index');

module.exports = {
    addQuestion: async (req, res) => {
        const { question , answer } = req.body;
        if (!question || !answer) {
          return res.status(400).json({ error: 'You must provide question and answer' });
        }
        try {
          const newQusetion = await new Questions({ question,answer, user: req.user._id }).save();
          // const newTodo = await Todo.create({ text, user: req.user._id });
          // req.user.questions.push(newQusetion);
          await req.user.save();
          return res.status(200).json(newQusetion);
        } catch (e) {
          return res.status(403).json({ e });
        }
      },

      addScore: async (req, res) => {
        const { score} = req.body;
        if (!score) {
          return res.status(400).json({ error: 'You must provide score' });
        }
        try {
          const newScore = await new Score({ score, user: req.user._id }).save();
          // const newTodo = await Todo.create({ text, user: req.user._id });
          req.user.scores.push(newScore);
          await req.user.save();
          return res.status(200).json(newScore);
        } catch (e) {
          return res.status(403).json({ e });
        }
      },



}