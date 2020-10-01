import { Schema, model } from "mongoose";
const { ObjectId } = Schema;




const tweetSchema = new Schema({

    userId: {
        type: ObjectId,
        ref: "Users",
    },
    message: {
        type: String,
    }


}, { timestamps: true });


module.exports = model("Tweets", tweetSchema);