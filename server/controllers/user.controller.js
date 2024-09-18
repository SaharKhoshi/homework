import UserModel from "../models/users.model.js";


export const getAllFacultyMembers = async (req, res) => {
  try {
    const users = await UserModel.find();
    console.log(users);
    res.status(200).send(users);
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const addFacultyMember = async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).send({ data: user });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

export const deleteFacultyMember = async (req, res) => {
  try {
    const user = await UserModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).send({ data: user });
  } catch (error) {
    console.log(`error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};

// module.exports = {
//     getAllFacultyMembers,
//     addFacultyMember,
//     deleteFacultyMember
// };