import dbConnect from "../../../utils/dbConnect";
import User from "./../../../models/User";
import md5 from "md5";
import bcrypt from "bcrypt";
import withSession from "./../../../utils/withSession";

export default withSession(async (req, res) => {
  await dbConnect();
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Missing parameters" });
  }

  const user = await User.findOne({
    $or: [{ username: username }, { email: username }],
  });
  if (!user) {
    return res
      .status(404)
      .json({ message: "Your username or password is not correct" });
  }

  const { salt, password: hashPassword } = user;
  try {
    if (!((await bcrypt.hash(md5(password), salt)) === hashPassword)) {
      return res
        .status(404)
        .json({ message: "Your username or password is not correct" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Login failed" });
  }

  req.session.set("authKey", `${user._id}${user.password}_${user.salt}`);
  await req.session.save();
  return res.status(200).json({ message: "success" });
});
