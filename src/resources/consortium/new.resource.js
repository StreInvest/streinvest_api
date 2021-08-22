const NewConsortiumResource = async (res, req, next, modelo, modeloUser) => {
  try {
    const { token } = req.params
    const user = await modeloUser.findOne({ token, master: true })
    if (user) {
      const response = await new modelo(req.body).save();
      return res.status(201).json({ response, "status": 201 })
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
module.exports = NewConsortiumResource