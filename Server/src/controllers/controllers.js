import express from "express";
import { ContactModel } from "../database/connectdb.js";

const defaultControl = (req, res) => {
  res.send("<h1>Hello world</h1>");
};

const contactData = async (req, res) => {
  const { firstname, lastname, phoneno, email, address, message } = req.body;

  if (!firstname || !lastname || !phoneno || !email || !address || !message) {
    return res.status(422).json({ error: "Please filled the properly " });
  }
  try {
    const userExist = await ContactModel.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Excellent" });
    }
    const contactDetails = new ContactModel({
      firstname,
      lastname,
      phoneno,
      email,
      address,
      message,
    });
    const contact = await contactDetails.save();
    if (contact) {
      res.status(201).json({ error: "User registered successfully" });
    } else {
      res.status(500).json({ error: "Failed to registered" });
    }
  } catch (err) {
    console.log(err);
  }
};

export { defaultControl, contactData };
