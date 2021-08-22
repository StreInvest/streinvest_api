const EditConsortiumResource = async (res, req, next, modelo, modeloUser) => {
  try {
    const { token, id } = req.params
    const dados = req.body
    var now = new Date()
    dados['updated_at'] = now

    const user = await modeloUser.findOne({ token, master: true })
    if (user) {
      const resp = await modelo.findByIdAndUpdate(id, dados);
      if (resp) {
        const response = await modelo.findById(id)
        return res.status(200).json({ response, "status": 200 })
      }
      else {
        return res.status(400).json({
          response:
            "it was not possible to update, check the data is being sent correctly",
          status: 400
        })
      }
    }
    else {
      return res.status(401).json({ response: "you don't have access", status: 401 })
    }
  }
  catch (err) {
    console.log(err)
    next(err);
  }
}
module.exports = EditConsortiumResource