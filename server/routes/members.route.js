const { Router } = require("express");
const router = Router();
import {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
  } from "../controllers/user.controller.js";

  router.get("/", getAllFacultyMembers);
  router.post("/", addFacultyMember);
  router.delete("/:id", deleteFacultyMember);


  module.exports = router;