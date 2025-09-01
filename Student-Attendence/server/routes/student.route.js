const express= require("express")
const STUDROUET= express.Router();

const studentController= require("../controller/student.controller")

STUDROUET.get("/test", studentController.test);
STUDROUET.post("/create", studentController.create);
STUDROUET.get("/get", studentController.getalldata);
STUDROUET.get("/getbyid/:Stud_id", studentController.getdataBYiD);
STUDROUET.patch("/update/:Stud_id", studentController.updateData);
STUDROUET.delete("/delete/:Stud_id", studentController.delete);
STUDROUET.get("/filter",studentController.filter)

module.exports= STUDROUET