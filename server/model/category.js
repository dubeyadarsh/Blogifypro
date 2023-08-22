import mongoose from 'mongoose';
//Model
const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});


const category = mongoose.model('category', CategorySchema);

export default category;