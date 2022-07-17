import { Todo } from '../models/todomodel.js'
import mongoose from 'mongoose';


export const getToDo = async(req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createToDo = async(req, res) => {
    const { id, name, completed } = req.body;

    const newTodo = new Todo({ id: id, name: name, completed: completed })

    try {
        await newTodo.save();
        console.log(newTodo);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteToDo = async(req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Todo.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}