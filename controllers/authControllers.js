import User from "../models/User.js";
const register = async (req, res) => {
  // res.send("register");
  // console.log("req", req.body);
  try {
    await User.create(req.body).then((user) => {
      res.status(201).json({ message: "User successfully created", user });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "there was an error",
    });
  }
};

const login = async (req, res) => {
  res.send("login");
};
const updateUser = async (req, res) => {
  res.send("updateUser");
};

export { register, login, updateUser };
