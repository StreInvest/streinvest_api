const DeleteInvestimentResource = async (res, req, next, modeloInvest, modeloUser) => {
  try {
    const { id, token } = req.params

    const user = await modeloUser.findOne({ token, master: true })

    if (user) {
      const resp = await modeloInvest.findByIdAndDelete(id);
      if (resp) {
        return res.status(204).json({})
      } else {
        return res.status(404).json({ response: "User already deleted", status: 404 })
      }
    } else {
      return res.status(403).json({ response: "you don't have access", status: 403 })
    }

  }
  catch (err) {
    next(err);
  }
}
module.exports = DeleteInvestimentResource