const RecoverTokenUserResource = async (jwt, res, req, next, modelo) => {
  try {
    const { id } = req.params

    var dados = jwt.sign({ user: modelo.email }, 'Abc!23').toString()
    var token = dados.slice(85, 105)
    var now = new Date()
    const resp = await modelo.findByIdAndUpdate(id, { token: token, updated_at: now });

    if (resp) {
      const response = await modelo.findById(id);
      return res.status(200).json({ response, status: 200 })
    }
    else {
      return res.status(404).json({ response: "Algo de errado não deu certo", status: 404 })
    }
  }
  catch (err) {
    next(err);
  }
}
module.exports = RecoverTokenUserResource