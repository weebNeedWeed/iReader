import dbConnect from "../../../utils/dbConnect";
import User from "./../../../models/User";
import md5 from "md5";
import bcrypt from "bcrypt";
import withSession from "./../../../utils/withSession";

export default withSession(async (req, res) => {
  await dbConnect();
  const { username, password, email, repeatPassword, displayName } = req.body;

  if (!username || !password || !email || !repeatPassword) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  if (repeatPassword !== password) {
    return res.status(401).json({ error: "repeatPassword not match password" });
  }

  if (displayName.length < 5 || displayName.length > 50) {
    return res
      .status(401)
      .json({ error: "display name phai dai hon 4 ky tu va be hon 50 ky tu" });
  }

  const mailCheckRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!email.match(mailCheckRegex)) {
    return res.status(401).json({ error: "mail khong chuan form" });
  }

  if (username.length < 5 || username.length > 50) {
    return res
      .status(401)
      .json({ error: "username phai dai hon 4 ky tu va be hon 50 ky tu" });
  }

  const passwordCheckRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}/;
  if (!password.match(passwordCheckRegex)) {
    return res.status(401).json({
      error:
        "password phai dai hon 8 ky tu, co it nhat 1 chu in hoa, so, chu in thuong",
    });
  }

  if (await User.findOne({ username })) {
    return res.status(401).json({ error: "username exist" });
  }

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(md5(password), salt);

  const newUser = new User({
    username,
    salt,
    displayName,
    password: hashPassword,
    email,
  });
  await newUser.save();

  return res.status(200).json({ message: "success" });
});
