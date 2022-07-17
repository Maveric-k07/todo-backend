import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    id: String,
    name: String,
    completed: {
        type: Boolean,
        default: false
    }
})

export const Todo = mongoose.model('Todo', todoSchema);