import withSession from "./../../../utils/withSession";

export default withSession(async (req, res) => {
  if (req.session.get("authKey")) {
    req.session.destroy();
  }

  return res.status(200).json({ message: "success" });
});
