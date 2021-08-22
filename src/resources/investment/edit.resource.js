const EditInvestimentResource = async (res, req, next, modeloInvest, modeloUser) => {
  try {
    const { token, id } = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now

    const user = await modeloUser.findOne({ token, master: true })
    if (user) {
      const resp = await modeloInvest.findByIdAndUpdate(id, dados);
      if (resp) {
        const response = await modeloInvest.findById(id)
        return res.status(200).json({ response, "status": 200 })
      }
      else {
        return res.status(204).json({
          response:
            "it was not possible to update, check the data is being sent correctly",
          status: 204
        })
      }
    }
    else {
      return res.status(403).json({ response: "you don't have access", status: 403 })
    }
  }
  catch (err) {
    next(err);
  }
}
module.exports = EditInvestimentResource