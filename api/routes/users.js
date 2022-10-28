const express = require("express");
const router = express.Router();

const { generateToken, validateToken } = require("../config/token");

const User = require("../models/User");


router.post("/", (req, res) => {
  User.create(req.body)
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((usuario) => {
    if (!usuario) return res.sendStatus(401);
    usuario.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        user: usuario.user,
        email: usuario.email,
      };

      const token = generateToken(payload);

      res.cookie("token", token);

      res.send(payload);
    });
  });
});

router.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);
  const { user } = validateToken(token);
  
  if (!user) return res.sendStatus(401);
  res.send(user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

router.use("/", function (req, res) {
  res.sendStatus(404);
});

module.exports = router;
