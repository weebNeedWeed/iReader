import dbConnect from "../../../utils/dbConnect";
import User from "./../../../models/User";
import Book from "./../../../models/Book";
import withSession from "./../../../utils/withSession";

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
      const { title, description, slug, imageUrl, tag } = req.body;

      const newBook = new Book({
        title,
        description,
        slug,
        imageUrl,
        tag,
      });

      try {
        await newBook.save();
      } catch (error) {
        return res.status(401).json({ message: "Error" });
      }
      return res.status(200).json({ message: "Success" });
    } else if (req.method === "PUT") {
      const { title, description, slug, imageUrl, tag, _id } = req.body;
      const book = await Book.findOne({ _id });

      if (!book) {
        return res.status(404).json({ message: "Not found" });
      }

      book.title = title;
      book.description = description;
      book.slug = slug;
      book.tag = tag;
      book.imageUrl = imageUrl;

      try {
        await book.save();
      } catch (error) {
        return res.status(401).json({ message: "Error" });
      }

      return res.status(200).json({ message: "Success" });
    } else if (req.method === "DELETE") {
      const { _id } = req.body;

      try {
        await Book.deleteOne({ _id });
      } catch (error) {
        return res.status(401).json({ message: "Error" });
      }

      return res.status(200).json({ message: "Success" });
    }
  } else return res.status(401).json({ message: "Invalid credentials" });
});
