const EditUserResource = async (res, req, next, modelo) => {
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
    else {
      return res.status(404).json({ response: "Erro, algo verefique se os dados estão corretos", status: 404 })
    }
  }
  catch (err) {
    next(err);
  }
}
module.exports = EditUserResource