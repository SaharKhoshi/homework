import express from "express";

import {
    getAllFacultyMembers,
    addFacultyMember,
    deleteFacultyMember
  } from "../controllers/user.controller.js";

const router = express.Router()

  router.get("/", getAllFacultyMembers);
  router.post("/", addFacultyMember);
  router.delete("/:id", deleteFacultyMember);



  module.exports = router;