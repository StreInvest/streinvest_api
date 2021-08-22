const ShowInvestimentResource = async (res, req, next, modeloInvest, modeloUser) => {
  try {
    const { token, id } = req.params
    const user = await modeloUser.findOne({ token: token })
    if (user) {
      const response = await modeloInvest.findOne({ _id: id }).populate('consortium')
      return res.status(200).json({ response, status: 200 });
    }
    else {
      return res.status(401).json({ response: "you don't have access", status: 401 })
    }

  } catch (err) {
    next(err);
  }
}
module.exports = ShowInvestimentResource