import mongoose, { model } from 'mongoose';


const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: true},
    creator: {type: String, required: true},
    tags: [String],
    selectedFile: {type: String, required: true},
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

module.exports = PostMessage;