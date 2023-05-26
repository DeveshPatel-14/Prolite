import express from "express";
const router = express.Router();
import GroupManage from "../models/GroupManage.js"

router.post('/addgroups', async (req, res) => {
        try {
            const { prjName, prjMember1, prjMember2, prjMember3, prjMember4, link } = req.body;
            
            const group = new GroupManage({
                prjName: prjName, prjMember1:prjMember1, prjMember2: prjMember2,prjMember3: prjMember3, prjMember4:prjMember4, prjlink:link
            })
            const savedGroup = await group.save()

            res.json(savedGroup)
            console.log(res);

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })
export default router;
