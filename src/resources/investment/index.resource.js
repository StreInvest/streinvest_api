const IndexInvestimentResource = async (res, req, next, modeloInvest, modeloUser, modeloConsortium) => {
  try {
    const { token } = req.params
    const { consortium, category, limit = 10, page = 1, order = 'asc' } = req.query
    var orderNum = order == 'desc' ? -1 : 1
    const user = await modeloUser.findOne({ token: token })
    if (user) {
      let con = consortium == 'all' ? undefined : consortium
      let cat = category == 'all' ? undefined : category
      if (con != undefined || cat != undefined) {
        const consu = await modeloConsortium.findOne({ consortium_name: consortium });
        if (consu) {
          const response = await modeloInvest.find({ consortium: consu._id })
            .populate('consortium')
            .sort({ created_at: orderNum })
            .limit(limit * 1)
            .skip((page - 1) * limit);
          return res.status(200).json({
            response,
            paginate: { limit, page, totalCurrentPage: response.length + "" },
            status: 200
          });
        } else {
          const response = await modeloInvest.find({ category: category })
            .populate('consortium')
            .sort({ created_at: orderNum })
            .limit(limit * 1)
            .skip((page - 1) * limit);
          return res.status(200).json({
            response,
            paginate: { limit, page, totalCurrentPage: response.length + "" },
            status: 200
          });
        }
      }
      else {
        const response = await modeloInvest.find({})
          .populate('consortium')
          .sort({ created_at: orderNum })
          .limit(limit * 1)
          .skip((page - 1) * limit);
        return res.status(200).json({
          response,
          paginate: { limit, page, totalCurrentPage: response.length + "" },
          status: 200
        });
      }


    }
    else {
      return res.status(401).json({ response: "you don't have access", status: 401 })
    }

  } catch (err) {
    next(err);
  }
}
module.exports = IndexInvestimentResource