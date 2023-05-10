const express= require("express");
const { registerUser,
        loginUser,
        logoutUser,
        updateUser
         } = require("../controllers/userController");
         
const { protect, admin } = require("../moddleWare/authMiddleware");
         

const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.put("/:id",protect,admin, updateUser);




module.exports=router;