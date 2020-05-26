const User = require('../models/user')

class authControll {
  async store(req,res) {
    try {
      const user = await User.create(req.body)
      return res.json(user)

    } catch (err) {
        return res.status(400).json({ error: 'Falha de Registro' })
      }
  };

  async index(req,res) {
    const user = await User.find({})
    return res.json(user)
  }

  async update(req,res) {
    const user = await User.findByIdAndUpdate({ _id: req.params.id })
    return res.json(user)
  }

  async delete(req,res) {
    const user = await User.findByIdAndDelete({ _id: req.params.id })
    return res.json(user)
  }
}


module.exports = new authControll