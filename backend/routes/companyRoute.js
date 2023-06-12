const express = require('express');
const { createCompany, getCompanys, updateCompany, getCompany, deleteCompany } = require('../controllers/companyController');
const router = express.Router();
router.get("/",  getCompanys);
router.post("/",createCompany);
router.patch("/:id",updateCompany);
router.get("/:id",getCompany);
router.delete("/:id",deleteCompany);

module.exports = router;