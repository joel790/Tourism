const express= require("express");
const { registerUser,
        loginUser,
        logoutUser,
        updateUser,
        getUsers,
        getUser
         } = require("../controllers/userController");
         
const { protect, admin } = require("../moddleWare/authMiddleware");
         

const router=express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/logout",logoutUser);
router.get("/",getUsers);
router.get("/:id",getUser);

router.put("/:id",protect,admin, updateUser);




module.exports=router;