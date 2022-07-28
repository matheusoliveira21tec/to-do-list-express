const express = require('express');
const Checklist = require('../models/checklist');
const Task = require('../models/task');
const checklistDepedentRoute = express.Router();

checklistDepedentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = new Task();
        res.status(200).render('tasks/new', { checklistId: req.params.id, task: task });
    } catch (error) {
        res.status(422).render('pages/error', { error: 'Erro ao carregar formulario' });
    }
})
checklistDepedentRoute.post('/:id/tasks/new', async (req, res) => {
    let {name} = req.body.task;
    let task = new Task({name, checklist: req.params.id});
    try {
        await task.save();
        let checklist = await Checklist.findById(req.params.id);
        checklist.tasks.push(task);
        await checklist.save();
        res.redirect(`/checklists/${req.params.id}`);
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', { task: {...task, error}, checklistsId: req.params.id });
    }
})

module.exports = {checklistDepedent : checklistDepedentRoute};