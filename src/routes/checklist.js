const express = require('express');
const Checklist = require('../models/checklist');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find({});
        res.status(200).send(checklists);
    } catch (error) {
        res.status(422).send(error);
    }
})
router.post('/', async (req, res) => {
    let { name } = req.body;
    try {
        let checklist = await Checklist.create({ name })
        res.status(200).send(checklist);
    } catch (error) {
        res.status(422).send(error);
    }
})
router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).send(checklist);
    } catch (error) {
        res.status(422).send(error);
    }
})
router.put('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndUpdate(req.params.id, { name }, { new: true });
        res.status(200).send(checklist);
    } catch (error) {
        res.status(422).send(error);
    }
})
router.delete('/:id', async (req, res) => {
    let { name } = req.body
    try {
        let checklist = await Checklist.findByIdAndRemove(req.params.id);
        res.status(200).send(checklist);
    } catch (error) {
        res.status(422).send(error);
    }
})
module.exports = router;