const ShowConsortiumResource = async (res, req, next, modelo, modeloUser) => {
  try {
    const { token, id } = req.params

    const user = await modeloUser.findOne({ token: token })

    if (user) {
      const response = await modelo.findOne({ _id: id });
      if (response) {
        return res.status(200).json({
          response,
          status: 200
        });
      }
      else {
        return res.status(403).json({ response: "unidentified resource, verify that the data is correct", status: 403 })
      }
    }
    else {
      return res.status(401).json({ response: "token invalid", status: 401 })
    }

  } catch (err) {
    next(err);

  }
}
module.exports = ShowConsortiumResource