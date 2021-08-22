const NewUserResource = async (jwt, res, req, next, modelo) => {
  try {
    const dados = req.body
    const token = jwt.sign({ user: modelo.email }, 'Abc!23').toString()
    dados["token"] = token.slice(85, 105)
    const response = await new modelo(dados).save();
    return res.status(201).json({ response, status: 201 })
  }
  catch (err) {
    next(err);
  }
}
module.exports = NewUserResource