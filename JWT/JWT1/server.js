require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");
const app = express();
app.use(express.json());
const posts = [
  {
    userId: 1,
    post: "post daniel",
  },
  {
    userId: 2,
    post: "post john",
  },
];
app.get("/posts", verifyToken, (req, res) => {
  res.json(posts.filter((post) => post.userId === req.userId));
});
// app.post("/login", (req, res) => {
//   const username = req.body.username;
//   const user = users.find((user) => user.username === username);
//   if (!user) return res.sendStatus(401);
//   //create JWT
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "15s",
//   });
//   res.json({ accessToken });
// });
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
