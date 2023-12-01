const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const db = require("./db/NOTE");

const PORT = 3000;
app = express();

app.use(bodyParser.json());

app.post('/notes',async (req,res)=>{
    const results = await db.createNote(req.body);
    res.status(201).json({results})
})

app.get('/notes', async (req,res)=>{
    const note = await db.getNotes();
    res.status(200).json({note})
})

app.put('/notes/:id',async (req,res)=>{
    const id = await db.updateNote(req.params.id, req.body);

    res.status(200).json({id});
})

app.delete('/notes/:id',async (req,res)=>{
    await db.deleteNote(req.params.id);
    res.status(200).json({success : true});
})

app.listen(PORT,()=>{
    console.log(`server is running`)
});