import express from "express"
import { createAdmin } from "../controllers/userController.js";   //import function
import { createAlumni } from "../controllers/userController.js";
import { createStudent,getAllUsers } from "../controllers/userController.js";
import { createCompany, getCompanies } from "../controllers/companyController.js";
import { createReview,getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesController.js";
import { isAdmin} from "../middleware/Middleware.js"

const router=express.Router()

router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)
router.get("/user/get",getAllUsers)
router.post("/company/create",isAdmin,createCompany)
router.get("/company/get",getCompanies)
router.post("/review/create",createReview)
router.get("/review/get",getAllReviews)
router.post("/like/add",likeReviews)

export default router;