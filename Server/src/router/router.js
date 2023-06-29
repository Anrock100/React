import express from "express";
import { defaultControl, contactData } from "../controllers/controllers.js";
const Router = express.Router();
Router.get("/", defaultControl);
Router.post("/contact", contactData);
export { Router };
