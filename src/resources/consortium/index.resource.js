const IndexConsortiumResource = async (res, req, next, modelo, modeloUser) => {
  try {
    const { token } = req.params
    const { consortium, limit = 10, page = 1, order = 'asc' } = req.query
    var orderNum = order == 'desc' ? -1 : 1
    const user = await modeloUser.findOne({ token: token })
    if (user) {
      if (consortium != undefined || consortium != null) {
        const response = await modelo.find({ consortium_name: consortium })
          .sort({ created_at: orderNum })
          .limit(limit * 1).skip((page - 1) * limit);
        return res.status(200).json({
          response,
          paginate: {
            limit,
            page,
            totalCurrentPage: response.length + ""
          },
          status: 200
        });
      }
      else {
        const response = await modelo.find({}).sort({ created_at: orderNum }).limit(limit * 1).skip((page - 1) * limit);
        return res.status(200).json({
          response,
          paginate: {
            limit,
            page,
            totalCurrentPage: response.length + ""
          },
          status: 200
        });
      }
    }
    else {
      return res.status(401).json({ response: "token invalid", status: 401 })
    }

  } catch (err) {
    next(err);

  }
}
module.exports = IndexConsortiumResource