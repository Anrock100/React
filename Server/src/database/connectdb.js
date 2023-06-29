import mongoose from "mongoose";
mongoose
  .connect("mongodb://127.0.0.1:27017/Anjan")
  .then(() => console.log("Mongoose connected successfully"))
  .catch((err) => console.log(err));

const contactSchema = new mongoose.Schema({
  firstname: { type: String, required: true, trim: true },
  lastname: { type: String, required: true, trim: true },
  phoneno: { type: Number, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  address: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
});

const ContactModel = mongoose.model("contacts", contactSchema);

export { ContactModel };
