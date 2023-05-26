import express from "express";
import {getAnnouncements, getManageFaculty,getAssignMentor,getAssignPanel,getSubmission,getGroupManage} from "../controllers/client.js";


const router = express.Router();
router.get("/announcements", getAnnouncements);
router.get("/manageFaculty", getManageFaculty);
router.get("/AssignMentor", getAssignMentor);
router.get("/AssignPanel", getAssignPanel);
router.get("/GroupManage", getGroupManage);
router.get("/Submission", getSubmission);



export default router;

