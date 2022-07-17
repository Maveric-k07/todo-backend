import express from 'express';
import { getToDo, createToDo, deleteToDo, updateCompleted } from '../controller/controller.js';

var router = express.Router();

router.get('/', getToDo);
router.post('/', createToDo);
router.delete('/:id', deleteToDo);
router.patch('/:id', updateCompleted);


export default router;
