import { Note } from "../models/User.models.js";

const createNote = async (req,res)=>{
    const data = await Note.create({
        title: req.body.title,
        content: req.body.content
    });
    return res.status(200).json(data);
}

const getNote = async (req,res)=>{
    try{
        const data = await Note.find({});
        res.status(200).send(data);
    } 
    catch (err){
        res.status(400).send("Something is wrong");
    }
}

export {
    createNote,
    getNote
}