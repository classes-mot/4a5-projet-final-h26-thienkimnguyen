import mongoose from "mongoose";

const avisSchema = new mongoose.Schema({
    description : { type : String, required : true},
    owner : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref : 'User',
    },
});

export const Avis = mongoose.model('Avis', avisSchema)