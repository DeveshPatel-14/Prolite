import mongoose from 'mongoose';

const ManageFacultySchema = new mongoose.Schema(
    {
        teacherName:{
            type: String,
            required: true,
        },
    }
);
const ManageFaculty = mongoose.model("ManageFaculty", ManageFacultySchema);
export default ManageFaculty;