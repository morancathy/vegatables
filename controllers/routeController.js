const express = require('express');
const router = express.Router();
const viewController = require('./viewController');
const dataController = require('./dataController');

const methodOverride = require('method-override');
router.use(methodOverride('_method'));

// INDEX
router.get('/', dataController.index, viewController.index);

// NEW
router.get('/new', viewController.new);

// DELETE
router.delete('/:id', dataController.destroy, viewController.redirectHome);

// UPDATE
router.put('/:id', dataController.update, viewController.redirectShow);

// CREATE
router.post('/', dataController.create, viewController.redirectHome);

// EDIT
router.get('/:id/edit', dataController.show, viewController.edit);

// SHOW
router.get('/:id', dataController.show, viewController.show);

module.exports = router;
