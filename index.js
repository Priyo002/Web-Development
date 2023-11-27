const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const PORT = 3000;
app = express();
app.use(bodyParser.json())

let notes = [];

function findIdx(id){
    for(var i=0;i<notes.length;i++){
        if(notes[i].id==id) return i;
    }
    return -1;
}
function removeidx(idx){
    let newNote = [];
    for(var i=0;i<notes.length;i++){
        if(i!=idx) newNote.push(notes[i]);
    }
    notes = newNote;
}

app.get('/',(req,res)=>{
    const temp = {
        "To get Notes" : "/getNotes",
        "To insert Notes" : "/insertNotes",
        "To find Content" : "/getContent/:id",
        "To delete a contes" : "/delete/:id",
        "To update " : "/update/:id"
    }
    res.send(temp)
})

app.get('/getNotes',(req,res)=>{
    res.send(notes);
})

app.post('/insertNotes',(req,res)=>{
    const {title, content} = req.body
    const newNote = {
        id : uuidv4(),
        title : title, 
        content : content
    }
    notes.push(newNote)
    res.json(notes);
})

app.get('/getContent/:id',(req,res)=>{
    const getid = findIdx(req.params.id);
    if(getid!==-1) res.status(202).send(JSON.stringify(notes[getid].content));
    else res.status(404).send(`The content with id ${req.params.id} is not found`);
})

app.put('/update/:id',(req,res)=>{
    const idx = findIdx(req.params.id);
    const {title, content} = req.body;
    if(idx!=-1){
        notes[idx].title = title;
        notes[idx].content = content
        res.status(202).send("Updated")
    }
    else res.status(404).send(`The content with id ${req.params.id} is not found`);
})

app.delete('/delete/:id',(req,res)=>{
    const idx = findIdx(req.params.id);
    if(idx!=-1){
        removeidx(idx);
        res.send(202).send(`The Note with id ${req.params.id} is successfully deleted`)
    }
    else res.status(404).send(`The content with id ${req.params.id} is not found`);
})

app.listen(PORT,()=>{
    console.log(`server is running at https://localhost:${PORT}`)
});