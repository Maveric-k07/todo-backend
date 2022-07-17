import express from 'express';
import { getToDo, createToDo, deleteToDo } from '../controller/controller.js';

var router = express.Router();

router.get('/', getToDo);
router.post('/', createToDo);
router.delete('/:id', deleteToDo);


export default router;
