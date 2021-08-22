const ShowUserResource = async (res, req, next, modelo) => {
  try {
    const { id } = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now
    const resp = await modelo.findByIdAndUpdate(id, dados);

    if (resp) {
      var response = await modelo.findById(id);
      return res.status(200).json({ response, status: 200 })
    }
  }
  catch (err) {
    next(err);
  }
}
module.exports = ShowUserResource