const express = require("express");
const router = express.Router();
const Users = require("./schema");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  console.log(req.body);
//   const user = await Users.findOne({ email: req.body.email }).lean();
//   if (user) {
//     try {
//       const { email, password } = user;
//       const isMatched = bcrypt.compareSync(req.body.password, password);
//       if (email && isMatched) {
//         const { password, ...refactoredUserObj } = user;
//         res.json({
//           msg: "You have logged in successfully",
//           isLogedin: true,
//           userData: refactoredUserObj,
//         });
//       } else {
//         res.json({
//           msg: "Invalid Password",
//         });
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   } else {
//     res.json({
//       msg: "User Does not Exist!",
//     });
//   }
});

module.exports = router;
