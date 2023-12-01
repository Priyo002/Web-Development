const knex = require("./knex");

function createNote(note){
    return knex("NOTE").insert(note);
}
function getNotes(){
    return knex("NOTE").select("*");
}

function deleteNote(id){
    return knex("NOTE").where("id",id).del();
}
function updateNote(id,note){
    return knex("NOTE").where("id",id).update(note)
}

module.exports = {
    createNote,
    getNotes,
    deleteNote,
    updateNote
}