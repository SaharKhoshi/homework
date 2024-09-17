import UserModel from "../models/users.model.js";


const getAllFacultyMembers = async (req, res) => {
    try {
      const data = await UserModel.find({});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

const addFacultyMember = async (req, res) => {
try {
    const newUser = req.body;
    console.log(newUser);
    const data = await UserModel.create(newUser);
    res.status(201).json(data);
} catch (error) {
    res.status(500).json({ message: error });
}
};

const deleteFacultyMember = async (req, res) => {
try {
  const id = req.params.id;
  const data = await UserModel.findOneAndDelete({ _id: id });
  res.status(201).json(data);
} catch (error) {
  res.status(500).json({ message: error });
}
};

module.exports = {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
};