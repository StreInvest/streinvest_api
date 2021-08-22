const IndexUserResource = async (res, next, modelo) => {
  try {
    const response = await modelo.find({});
    return res.status(200).json({ response, status: 200 });
  } catch (err) {
    next(err);
  }
}
module.exports = IndexUserResource