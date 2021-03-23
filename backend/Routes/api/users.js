const express = require("express");
const router = express.Router();
const keys = require('../../config/keys')



const validateRegisterInput= require('../../validation/register')

const Staff = require('../../Models/Staff')


router.post('/addstaff', (req, res)=>{
    const {errors, isValid} = validateRegisterInput(req.body);


    if(!isValid){
        res.status(400).json(errors)
    }

    Staff.findOne({idNumber: req.body.IdNumber}).then((staff)=>{
        if(staff){
            res.status(400).json({idNumber: "This ID has already been registered "})
        }

        else{
            const newStaff = new Staff({
                idNumber:req.body.idNumber,
                employmentNumber:req.body.employmentNumber,
                surname:req.body.surname,
                otherNames:req.body.otherNames,
                region:req.body.region,
                department:req.body.department,
             
            })

            newStaff.save().then((staff)=>{
                res.status(200).json(staff)
            }).catch(err=>{console.log(err)})
        }
    })
        
    })


module.exports=router;


    

