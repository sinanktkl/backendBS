const express = require('express')
const router = express.Router()
const patientController = require('../Controllers/patientController')
const { login, getUser } = require("../Controllers/UserController");
const authMiddleware = require("../Middleware/AuthMiddleware");



// userRoutes========

//login
router.post("/login", login);

// getUser
router.get("/me", authMiddleware, getUser); 



// patient route===============


//AddBrongo

router.post('/AddBrongo',patientController.AddBrongo)

// getBrongo

router.get('/getBrongo',patientController.getBrongoDetails)


// deleteBrongo

router.delete('/deleteBrongo/:id',patientController.deleteBrongoDetails)


// update brongo
router.put('/updateBrongo/:id', patientController.updateBrongoDetails);


module.exports = router