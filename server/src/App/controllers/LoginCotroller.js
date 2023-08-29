const User = require("../models/user");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (!user) {
      return res
        .status(404)
        .send({ message: "không tìm thấy user!!!!!" + req.body });
    }
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "mật khẩu không đúng!",
      });
    }
    const token = jwt.sign({ id: user.id }, config.jwt.secret, {
      expiresIn: config.jwt.tokenLife,
    });
    console.log(user);
    res.status(200).send({
      id: user._id,
      name: user.name,
      accessToken: token,
    });
  });
};
