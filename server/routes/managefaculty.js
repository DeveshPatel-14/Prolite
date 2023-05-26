import express from "express";
const router = express.Router();
import ManageFaculty from "../models/ManageFaculty.js";

router.get('/getfaculty', async (req, res) => {
    try {
        const facultys = await ManageFaculty.find({});
        
        const facultymap = {};
        facultys.forEach((faculty) => {
            facultymap[faculty._id] = faculty;
        });

        res.send(facultymap);

        // res.json(faculty)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


router.post('/addfaculty', async (req, res) => {
    try {
        const { teacherName } = req.body;
        

        const faculty = new ManageFaculty({
            teacherName : teacherName
        })
        const savedfaculty = await faculty.save()

        res.json(savedfaculty)

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

router.put('/updatefaculty/:id', async (req, res) => {

    const { id, teachername} = req.body;
    try {
        // Create a newNote object
        const newFaculty = {};
        if (teachername) { newFaculty.teacherName = teachername };
        

        let faculty = await ManageFaculty.findById(req.params.id);
        if (!faculty) { return res.status(404).send("Not Found") }

        
        faculty = await ManageFaculty.findByIdAndUpdate(req.params.id, { $set: newFaculty }, { new: true })
        res.json({ faculty });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
    

})

router.delete('/deletefaculty/:id', async (req, res) => {
    try {

        // let faculty = await ManageFaculty.findById(req.params.id);
        // if (!faculty) { return res.status(404).send("Not Found") }

        faculty = await ManageFaculty.findByIdAndDelete(req.params.id)

        res.json({ "Success": "Faculty has been deleted", faculty: faculty });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

export default router;
