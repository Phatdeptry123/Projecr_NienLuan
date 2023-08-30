const User = require("../models/user");
const { mongooseToOpject } = require("../../util/mongoose.js");
const { mutipleMongooseToOpject } = require("../../util/mongoose");

exports.signin = async (req, res) => {
  const records = await User.findOne({
    username: req.body.username,
  });
  console.log(records);
  if (!records) {
    return res
      .status(404)
      .send({ message: "không tìm thấy user!!!!!" + req.body });
  }

  const passwordIsValid =
    req.body.password.toString() == records.password.toString();
  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "mật khẩu không đúng!",
    });
  }

  console.log(records);
  res.status(200).send({
    id: records._id,
    name: records.name,
  });
};
