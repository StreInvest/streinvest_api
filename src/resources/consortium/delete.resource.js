const DeleteConsortiumResource = async (res, req, next, modelo, modeloUser) => {
  try {
    const { id, token } = req.params

    const user = await modeloUser.findOne({ token, master: true })

    if (user) {
      const resp = await modelo.findByIdAndDelete(id);
      if (resp) {
        return res.status(204).json({})
      } else {
        return res.status(404).json({ response: "User already deleted", status: 404 })
      }
    } else {
      return res.status(401).json({ response: "you don't have access", status: 401 })
    }
  }
  catch (err) {
    next(err);
  }
}
module.exports = DeleteConsortiumResource
