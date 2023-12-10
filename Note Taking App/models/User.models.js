import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    {
        username:{
            type : String,
            required: true
        },
        useremail:{
            type: String,
            required: true
        },
        notes :[
            {
                title: String,
                content: String,
            }
        ]
    },
    {timestamps: true}
)

export const Note = mongoose.model("Note",userSchema);