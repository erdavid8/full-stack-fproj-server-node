import userModel from "./user-model.js";

const findAllProfile = () => userModel.find();
const findProfileById = (id) => userModel.findById(id);
const findProfileByEmail = (email) => userModel.findOne({email});
const createProfile = (user) => userModel.insertMany(user);
const deleteProfile = (id) => userModel.deleteOne({_id: id})
const addlikedItem = (id, item) => userModel.updateOne({_id: id}, {
    $push:{
        likedItems: {
            $each: [item]
        }, $position: 0}})

export default {findAllProfile, findProfileById, findProfileByEmail,
    createProfile, deleteProfile, addlikedItem};
