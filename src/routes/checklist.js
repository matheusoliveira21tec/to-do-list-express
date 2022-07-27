const express = require('express');
const Checklist = require('../models/checklist');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log('passei por aqui');
    res.send();
})
router.post('/', async(req,res)=>{
    let{name}= req.body;
    try {
        let checklist = await Checklist.create({name})
        res.status(200).send(checklist);
    } catch (error) {
        res.status(422).send(error);
    }
})
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.send(`Id: ${req.params.id}`);
})
module.exports = router;