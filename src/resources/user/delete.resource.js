const DeleteUserResource = async (res, req, next, modelo) => {
  try {
    const { id } = req.params

    const resp = await modelo.findByIdAndDelete(id);

    if (resp) {
      return res.status(204).json({});
    } else {
      return res.status(404).json({ response: "User already deleted", status: 404 })
    }

  }
  catch (err) {
    next(err);
  }
}
module.exports = DeleteUserResource