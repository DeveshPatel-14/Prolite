import mongoose from 'mongoose';

const GroupManageSchema = new mongoose.Schema(
    {
        
        prjName: String,
        prjMember1: String,
        prjMember2: String,
        prjMember3: String,
        prjMember4: String,
        
    },
    {timestamps:true}
);

const GroupManage = mongoose.model("GroupManage", GroupManageSchema);
export default GroupManage;