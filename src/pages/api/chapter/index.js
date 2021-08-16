import dbConnect from "../../../utils/dbConnect";
import User from "./../../../models/User";
import Book from "./../../../models/Book";
import Chapter from "./../../../models/Chapter";
import withSession from "./../../../utils/withSession";
import mongoose from "mongoose";

export default withSession(async (req, res) => {
  await dbConnect();

  if (req.session.get("authKey")) {
    const authKey = req.session.get("authKey");
    const id = authKey.slice(0, 24);
    const _pos = authKey.indexOf("_");
    const hashPassword = authKey.slice(24, _pos);
    const salt = authKey.slice(_pos + 1);
    const user = await User.findOne({
      $and: [{ _id: id }, { password: hashPassword }, { salt }],
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (!user.admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (req.method === "POST") {
      const { title, content, slug, book: bookId } = req.body;

      const newChapter = new Chapter({
        title,
        content,
        slug,
        book: new mongoose.Types.ObjectId(bookId),
        user: new mongoose.Types.ObjectId(id),
      });

      const sBook = await Book.findOne({ _id: bookId });
      sBook.chapters.push(newChapter);

      try {
        await newChapter.save();
        await sBook.save();
      } catch (error) {
        return res.status(401).json({ message: "error" });
      }

      return res.status(200).json({ message: "success" });
    }
  } else return res.status(401).json({ message: "Invalid credentials" });
});
